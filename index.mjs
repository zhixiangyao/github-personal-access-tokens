import { Octokit } from '@octokit/core'

const octokit = new Octokit({
  auth: '',
})

const res = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
  owner: '',
  repo: '',
  path: '',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
})

console.info(atob(res.data.content))
