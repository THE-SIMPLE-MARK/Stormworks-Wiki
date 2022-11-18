import path from 'path'
import fs from 'fs'

export interface Contributor {
  login: string
  name: string
  avatar_url: string
  profile: string
  contributions: string[]
}

/**
 * Read contributors from `.all-contributorsrc` file
 */
export function getAllContributors() {
  const contributorsRcPath = path.resolve('.all-contributorsrc')
  const { contributors } = JSON.parse(
    fs.readFileSync(contributorsRcPath, 'utf-8')
  )
  return contributors
}
