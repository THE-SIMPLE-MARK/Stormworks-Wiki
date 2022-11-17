import { Octokit } from '@octokit/rest'
import { numberFormatter } from './number-formatter'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

export async function getGithubStars() {
  let count: number

  try {
    const repo = await octokit.repos.get({
      owner: 'THE-SIMPLE-MARK',
      repo: 'Stormworks-Wiki',
    })
    count = repo.data.stargazers_count
  } catch (error) {
    count = 114
  }

  return {
    count,
    prettyCount: numberFormatter.format(count),
  }
}
