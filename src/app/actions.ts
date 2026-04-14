// 靜態導出模式下不使用 'use server'
export async function saveResource(resource: any) {
  // 這裡之後可以連接資料庫 (如 Supabase)
  console.log('Saving resource:', resource);
  return true;
}
