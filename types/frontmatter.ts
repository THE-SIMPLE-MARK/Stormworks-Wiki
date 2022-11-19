export interface FrontmatterHeading {
	id: string
	level: number
  text: string
}

export interface Frontmatter {
  id?: string,
  title: string,
  description?: string,
  headings?: FrontmatterHeading[]
	slug?: string,
	url?: string,
	editUrl?: string,
	subCategory?: SubCategory,
}

type SubCategory =
	"blocks" |
	"logic" |
	"propulsion"