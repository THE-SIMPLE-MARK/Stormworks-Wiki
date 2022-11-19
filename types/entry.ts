import type { FrontmatterHeading } from 'types/frontmatter'

export type Entry = {
  title: string
  url: string
  id: string
}

export type SubCategory = {
  id: string
  title: string
  entries: Entry[]
}

export type OverviewProps = {
  subCategories: SubCategory[]
  headings: FrontmatterHeading[]
}