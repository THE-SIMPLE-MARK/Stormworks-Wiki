import DocLayout from 'layouts/doc'
import { Frontmatter } from 'types/frontmatter'
import Components from 'components/doc-components/'
import Lorem from "react-lorem-component"
import { getFrontmatter } from 'utils/get-frontmatter'
import { GetStaticProps } from 'next'

export default function Page({ frontMatter }) {
  return (
    <DocLayout frontmatter={frontMatter}>
			<Components.FrontmatterFooter>
				<Components.FrontmatterButton href="google.com">Oh look, a majestic button!!!!</Components.FrontmatterButton>
			</Components.FrontmatterFooter>
			
			<Components.h2 id="heading1">Heading 1</Components.h2>
			<Lorem count="1" seed="1"/>

			<Components.h3 id="sub-heading1">Sub-heading</Components.h3>
			<Lorem count="1" seed="69"/>
			
    </DocLayout>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<{ props: { frontMatter: Frontmatter } }> => {
	return {
		props: {
			frontMatter: getFrontmatter("./pages/wiki/world-locations/frontMatters.json", "test")
		}
	}
}