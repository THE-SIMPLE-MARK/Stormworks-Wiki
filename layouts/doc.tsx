import PageContainer from 'components/page-container'
import Sidebar from 'components/sidebar/sidebar'
import { ReactNode } from 'react'
import { RouteItem } from 'utils/get-route-context'
import { Frontmatter } from 'types/frontmatter'

import worldLocationsSidebar from 'configs/world-locations.sidebar.json'
import componentsSidebar from 'configs/components.sidebar.json'
import standardsSidebar from 'configs/standards.sidebar.json'
import tutorialsSidebar from 'configs/tutorials.sidebar.json'
import communitySidebar from 'configs/community.sidebar.json'

export function getRoutes(slug: string): RouteItem[] {
  // for home page, use docs sidebar
  if (slug === '/') {
    return componentsSidebar.routes as RouteItem[]
  }

  const configMap = {
    '/wiki/world-locations': worldLocationsSidebar,
		'/wiki/components': componentsSidebar,
    '/wiki/standards': standardsSidebar,
    '/wiki/tutorials': tutorialsSidebar,
    '/community': communitySidebar,
  }

  const [, sidebar] =
    Object.entries(configMap).find(([path]) => slug.startsWith(path)) ?? []

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
  const routes = sidebar?.routes ?? []
  return routes as RouteItem[]
}

interface DocLayoutProps {
  frontmatter: Frontmatter
  children: ReactNode
  hideToc?: boolean
  maxWidth?: string
}

export default function DocLayout(props: DocLayoutProps) {
  const { frontmatter, children, hideToc, maxWidth } = props

  const routes = getRoutes(frontmatter.slug)

  return (
    <PageContainer
      hideToc={hideToc}
      maxWidth={maxWidth}
      frontmatter={frontmatter}
      leftSidebar={<Sidebar routes={routes} />}
			>
    	  {children}
    </PageContainer>
  )
}
