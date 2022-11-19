import * as Chakra from '@chakra-ui/react'
import * as React from 'react'
import PropsTable from '../props-table'
import FrontmatterButton from './frontmatter-button'
import { FeaturesCourses } from './course-banner'
import IconsList from './icons-list'
import {
  ColorPalette,
  ColorPalettes,
  ColorWrapper,
} from 'components/color-palette'
import { FrameworkLinks } from 'components/framework-link'
import { Anchor } from 'components/doc-components/anchor'
import { InlineCode } from 'components/doc-components/inline-code'
import { LinkedHeading } from 'components/doc-components/linked-heading'
import { TData, THead, Table } from 'components/doc-components/table'
import { VideoPlayer } from 'components/doc-components/video-player'
import { JoinCommunityCards } from 'components/community-card'
import FrontmatterFooter from './frontmatter-footer'
import NextImage from 'next/image'

const { Alert, AspectRatio, Box, chakra, Kbd, Link } = Chakra

const DocComponents = {
  ...Chakra,
  Image: props => (
    <Box my='5'>
      <NextImage
        layout='responsive'
        width={700}
        height={400}
        objectFit='contain'
        {...props}
      />
    </Box>
  ),
  LinkedImage: ({ href, ...props }) => (
    <Link display='block' my='10' href={href} isExternal>
      <DocComponents.Image {...props} />
    </Link>
  ),
  h1: props => <chakra.h1 apply='doc.h1' {...props} />,
  h2: props => <LinkedHeading apply='doc.h2' {...props} />,
  h3: props => <LinkedHeading as='h3' apply='doc.h3' {...props} />,
  h4: props => <LinkedHeading as='h4' apply='doc.h4' {...props} />,
  hr: props => <chakra.hr apply='doc.hr' {...props} />,
  strong: props => <Box as='strong' fontWeight='semibold' {...props} />,
  code: InlineCode,
  kbd: Kbd,
  br: ({ reset, ...props }: { reset: string; props: any }) => (
    <Box
      as={reset ? 'br' : undefined}
      height={reset ? undefined : '24px'}
      {...props}
    />
  ),
  table: Table,
  th: THead,
  td: TData,
  a: Anchor,
  p: props => <chakra.p apply='doc.p' {...props} />,
  ul: props => <chakra.ul apply='doc.ul' {...props} />,
  ol: props => <chakra.ol apply='doc.ul' {...props} />,
  li: props => <chakra.li pb='4px' {...props} />,
  blockquote: props => (
    <Alert
      mt='4'
      role='none'
      status='warning'
      variant='left-accent'
      as='blockquote'
      rounded='4px'
      my='1.5rem'
      {...props}
    />
  ),
  FrontmatterButton,
  IconsList,
  PropsTable,
  FrameworkLinks,
  VideoPlayer,
  AspectRatio,
  ColorPalette,
  ColorPalettes,
  ColorWrapper,
  FeaturesCourses,
  JoinCommunityCards,
	FrontmatterFooter,
}

export default DocComponents;