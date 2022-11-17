import {
  Icon,
  Link,
  Stack,
  Text,
  VStack,
  chakra,
  StackProps,
} from '@chakra-ui/react'
import React from 'react'
import { DiGithubBadge } from 'react-icons/di'
import { FaYoutube } from 'react-icons/fa'
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { VercelCallout } from './vercel-callout'
import { t } from 'utils/i18n'

type FooterLinkProps = {
  icon?: React.ElementType
  href?: string
  label?: string
}

const FooterLink = ({ icon, href, label }: FooterLinkProps) => (
  <Link display='inline-block' href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize='xl' color='gray.400' />
  </Link>
)

const links = [
  {
    icon: DiGithubBadge,
    label: 'GitHub',
    href: 'https://github.com/THE-SIMPLE-MARK',
  },
  {
    icon: MdEmail,
    label: 'Email',
    href: 'mailto:simple.mark3941@gmail.com',
  },
]

const HungaryFlag = (props) => (
  <chakra.svg
    display='inline-block'
    mx='3'
    h='16px'
    w='auto'
    viewBox='0 0 36 36'
    verticalAlign='middle'
    {...props}
  >
    <title>{t('component.footer.title')}</title>
		<path fill="#EEE" d="M0 14h36v8H0z"/>
		<path fill="#CD2A3E" d="M32 5H4C1.791 5 0 6.791 0 9v5h36V9c0-2.209-1.791-4-4-4z"/>
		<path fill="#436F4D" d="M4 31h28c2.209 0 4-1.791 4-4v-5H0v5c0 2.209 1.791 4 4 4z"/>
  </chakra.svg>
)

export const Footer = (props: StackProps) => (
  <VStack as='footer' spacing={4} mt={12} textAlign='center' {...props}>
    <Text fontSize='sm'>
      <span>
        {t('component.footer.proudly-made-in')}
        <HungaryFlag />
      </span>
      <span>by SIMPLE MARK</span>
    </Text>
    <Stack mt={4} direction='row' spacing='12px' justify='center'>
      {links.map((link) => (
        <FooterLink key={link.href} {...link} />
      ))}
    </Stack>
    <VercelCallout />
  </VStack>
)

export default Footer
