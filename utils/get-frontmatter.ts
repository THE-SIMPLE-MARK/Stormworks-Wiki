import { Frontmatter } from "types/frontmatter";
import fs from 'fs'

export function getFrontmatter(fontMattersFile: string, id: string): Frontmatter {
	const frontMatters: Frontmatter[] = JSON.parse(fs.readFileSync(fontMattersFile, "utf-8"))
	return frontMatters.find((frontMatter: Frontmatter) => frontMatter.id === id);
}