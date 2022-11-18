export interface Member {
  name: string
  avatar_url: string
  bio: string
  discord_username: string
  location: string
}

export interface FormerMember {
  name: string
  avatar_url: string
}

export type Contribution = 'website' | 'community' | 'resources' | 'tutorials'

export interface Contributor {
  name: string
  avatar_url: string
  contributions: Contribution[]
}
