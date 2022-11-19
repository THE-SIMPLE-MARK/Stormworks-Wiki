import {
  GridItem,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import type { GetStaticProps } from 'next'

import { ComponentOverviewItem } from 'components/component-overview-item'
import DocLayout from 'layouts/doc'
import type { SubCategory, OverviewProps } from 'types/entry'
import type { FrontmatterHeading } from 'types/frontmatter'
import { getFrontmattersByDir } from 'utils/get-frontmatters-by-dir'
import { capitalizeFirstLetter } from 'utils/capitalize-first-letter'

export const ComponentsOverview = ({ subCategories, headings }: OverviewProps) => {
  return (
    <DocLayout
      frontmatter={{
        title: 'Components',
        slug: '/wiki/components',
        headings,
      }}>
      <VStack w='full' mt={5} alignItems='stretch' spacing={12}>
        <Text lineHeight='tall'>
          StormWiki provides a description, usage examples and more for each component in the world of Stormworks:
        </Text>
        <List w='full' spacing={12}>
          {subCategories.map(({ title, entries, id }) => (
            <ListItem
              key={title}
              display='flex'
              flexDirection='column'
              rowGap={6}>
              <Heading as='h2' size='md' id={id} scrollMarginTop={24}>
                {capitalizeFirstLetter(title, "en")}
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {entries.map(({ title: entryTitle, url, id }) => (
                  <GridItem key={id}>
                    <ComponentOverviewItem
                      url={url}
                      title={entryTitle}
                      slug={id}
                    />
                  </GridItem>
                ))}
              </SimpleGrid>
            </ListItem>
          ))}
        </List>
      </VStack>
    </DocLayout>
  )
}

export const getStaticProps: GetStaticProps<OverviewProps> = async (): Promise<{ props: { subCategories: SubCategory[]; headings: FrontmatterHeading[]; } }> => {
	const { subCategories, headings } = await getFrontmattersByDir('./pages/wiki/components/frontMatters.json', '/wiki/components/');

  return {
    props: {
      subCategories,
      headings,
    }
  }
}

export default ComponentsOverview
