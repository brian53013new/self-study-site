const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OWNER = process.env.GITHUB_REPO_OWNER;
const REPO = process.env.GITHUB_REPO_NAME;
const FILE_PATH = 'src/lib/data.json';

// 從 GitHub 讀取內容
export async function fetchResourcesFromGithub() {
  const response = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
      cache: 'no-store', // 確保每次都是最新
    }
  );

  if (!response.ok) return null;
  const data = await response.json();
  const content = atob(data.content); // Base64 轉字串
  return {
    content: JSON.parse(content),
    sha: data.sha, // 更新時需要傳入 SHA
  };
}

// 提交更新到 GitHub
export async function updateResourcesInGithub(newContent: any, sha: string) {
  const response = await fetch(
    `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Update resources via Web UI',
        content: btoa(unescape(encodeURIComponent(JSON.stringify(newContent, null, 2)))), // 字串轉 Base64
        sha: sha,
      }),
    }
  );

  return response.ok;
}
