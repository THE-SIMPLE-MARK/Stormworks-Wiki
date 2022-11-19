import fs from 'fs';
import type { SubCategory } from "types/entry";
import type { Frontmatter, FrontmatterHeading } from 'types/frontmatter';

export async function getFrontmattersByDir(fontMattersFile: string, baseUrl: string): Promise<{ subCategories: SubCategory[]; headings: FrontmatterHeading[]; }> {
	const subCategories = []
	const headings = []

	const frontMatters: Frontmatter[] = JSON.parse(fs.readFileSync(fontMattersFile, "utf-8"))
	// sort array by alphabetical order
	frontMatters.sort((a: Frontmatter, b: Frontmatter) => a.title.localeCompare(b.title))

	for (const frontMatterUntyped of frontMatters) {
		const frontMatter: Frontmatter = frontMatterUntyped;
		const subCategory = await subCategories.find(subCategory => subCategory === frontMatter.subCategory)

		frontMatter.url = `${baseUrl}${!baseUrl.endsWith("/") ? "/" : ""}${frontMatter.id}`.replace("\\", "/")

		// if the subCategory doesn't exist then add it with the current frontMatter
		// otherwise just push the frontMatter to the entries
		if (!subCategory) {
			subCategories.push({
				id: frontMatter.subCategory.replace(/\s+/g, '-').toLowerCase(), // lowercase and replace whitespace with -
				title: frontMatter.subCategory,
				entries: [frontMatter],
			})
			headings.push({
				id: frontMatter.subCategory.replace(/\s+/g, '-').toLowerCase(), // lowercase and replace whitespace with -
				text: frontMatter.subCategory,
				level: 1,
			})
		}
		else subCategory.entries.push(frontMatter)
	}

	return { subCategories, headings }
}