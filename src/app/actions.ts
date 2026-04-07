'use server';

import { fetchResourcesFromGithub, updateResourcesInGithub } from '@/lib/github-api';
import { revalidatePath } from 'next/cache';

export async function getResources() {
  const result = await fetchResourcesFromGithub();
  return result;
}

export async function saveResource(updatedResource: any) {
  const result = await fetchResourcesFromGithub();
  if (!result) throw new Error('無法從 GitHub 獲取資料');

  const { content, sha } = result;
  const newContent = content.map((item: any) => 
    item.id === updatedResource.id ? updatedResource : item
  );

  const success = await updateResourcesInGithub(newContent, sha);
  if (success) {
    revalidatePath('/'); // 重新驗證首頁內容
  }
  return success;
}
