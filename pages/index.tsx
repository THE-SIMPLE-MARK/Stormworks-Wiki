import {
  Box,
  BoxProps,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  chakra,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import * as React from 'react'
import { DiGithubBadge } from 'react-icons/di'
import { FaArrowRight, FaDiscord } from 'react-icons/fa'
import { FiBookOpen, FiGithub, FiUsers } from 'react-icons/fi'
import {
  MdOutlineViewInAr,
  MdOutlineDirectionsBoat,
  MdBook,
  MdOndemandVideo,
  MdUpdate,
} from 'react-icons/md'
import Container from 'components/container'
import { DiscordStrip } from 'components/discord-strip'
import { Footer } from 'components/footer'
import Header from 'components/header'
import SEO from 'components/seo'
import type { Contributor } from 'utils/get-all-contributors'
import { getAllContributors } from 'utils/get-all-contributors'
import { getDiscordMembers } from 'utils/get-discord-members'
import { getGithubStars } from 'utils/get-github-stars'
import { t } from 'utils/i18n'

const Feature = ({ title, icon, children, ...props }) => {
  return (
    <Box
      bg='white'
      rounded='12px'
      shadow='base'
      p='40px'
      _dark={{ bg: 'gray.700' }}
      {...props}>
      <Flex
        rounded='full'
        w='12'
        h='12'
        bg='blue.500'
        align='center'
        justify='center'>
        <Icon fontSize='24px' color='white' as={icon} />
      </Flex>
      <Heading as='h3' size='md' fontWeight='semibold' mt='1em' mb='0.5em'>
        {title}
      </Heading>
      <Text fontSize='lg' opacity={0.7}>
        {children}
      </Text>
    </Box>
  )
}

interface StatBoxProps extends BoxProps {
  icon?: React.ElementType
  title: string
  description: string
}

const StatBox = (props: StatBoxProps) => {
  const { icon: StatIcon, title, description, ...rest } = props
  return (
    <Flex
      direction='column'
      align={{ base: 'center', md: 'flex-start' }}
      pl={{ base: '0', md: '8' }}
      borderLeft='2px solid'
      borderLeftColor='yellow.200'
      {...rest}>
      <Box fontSize={{ base: '4rem', md: '6rem' }} lineHeight='1em' mb='20px'>
        {title}
      </Box>
      <Stack isInline align='center'>
        <StatIcon size='24px' />
        <Text>{description}</Text>
      </Stack>
    </Flex>
  )
}

interface HomePageProps {
  contributors: Contributor[]
  githubStars: string
  discordMembers: string
}

const HomePage = ({
  contributors,
  githubStars,
  discordMembers,
}: HomePageProps) => {
  return (
    <>
      <SEO
        title={t('homepage.seo.title')}
        description={t('homepage.seo.description')}
      />
      <Header />
      <Box mb={5}>
        <Box mb={60} as='section' pt='6rem' pb={{ base: '0', md: '5rem' }}>
          <Container>
            <Box textAlign='center'>
              <chakra.h1
                maxW='16ch'
                mx='auto'
                fontSize={{ base: '2.25rem', sm: '3rem', lg: '4rem' }}
                fontFamily='heading'
                letterSpacing='tighter'
                fontWeight='extrabold'
                mb='16px'
                lineHeight='1.2'>
                {t('homepage.title.main')}
              </chakra.h1>

              <chakra.h1
                maxW='50ch'
                mx='auto'
                fontSize={{ base: '1.25rem', sm: '2rem', lg: '2.5rem' }}
                fontFamily='heading'
                letterSpacing='tighter'
                fontWeight='extrabold'
                mb='16px'
                lineHeight='1.2'>
                {t('homepage.title.highlighted')}
                <Box as='span' color='blue.500' _dark={{ color: 'blue.300' }}>
                  {' '}
                  For Stormworks
                </Box>
              </chakra.h1>

              <Text
                maxW='560px'
                mx='auto'
                color='gray.500'
                _dark={{ color: 'gray.400' }}
                fontSize={{ base: 'lg', lg: 'xl' }}
                mt='6'>
                {t('homepage.message')}
              </Text>

              <Stack
                mt='10'
                spacing='4'
                justify='center'
                direction={{ base: 'column', sm: 'row' }}>
                <NextLink href='/wiki/components' passHref>
                  <Button
                    h='4rem'
                    px='40px'
                    fontSize='1.2rem'
                    as='a'
                    size='lg'
                    colorScheme='blue'
                    rightIcon={<FaArrowRight fontSize='0.8em' />}>
                    {t('homepage.browse-wiki')}
                  </Button>
                </NextLink>
                <Button
                  as='a'
                  size='lg'
                  h='4rem'
                  px='40px'
                  fontSize='1.2rem'
                  href='https://github.com/THE-SIMPLE-MARK/Stormworks-Wiki/'
                  target='__blank'
                  leftIcon={<DiGithubBadge size='1.5em' />}>
                  GitHub
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>

        <Divider />

        <Box as='section'>
          <Container py='80px'>
            <Box textAlign='center'>
              <chakra.h2 textStyle='heading'>
                {t('homepage.less-searching-more-speed')}
              </chakra.h2>
              <Text opacity={0.7} fontSize='lg' mt='3' mx='auto' maxW='600px'>
                {t('homepage.less-searching-description')}
              </Text>
            </Box>
          </Container>
        </Box>

        <Box as='section' bg='gray.50' _dark={{ bg: 'gray.900' }}>
          <Container py='120px' maxW='1280px'>
            <Box maxW='760px' mx='auto' textAlign='center' mb='56px'>
              <chakra.h2 textStyle='heading' mb='5'>
                {t('homepage.feature-section.title')}
              </chakra.h2>
              <chakra.p opacity={0.7} fontSize='lg'>
                {t('homepage.feature-section.description')}
              </chakra.p>
            </Box>
            <Grid
              templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
              gap={10}
              px={{ md: 12 }}>
              <Feature
                icon={MdOutlineViewInAr}
                title={t('homepage.feature-section.components.title')}>
                {t('homepage.feature-section.components.description')}
              </Feature>
              <Feature
                icon={MdBook}
                title={t('homepage.feature-section.standards.title')}>
                {t('homepage.feature-section.standards.description')}
              </Feature>
              <Feature
                icon={MdOutlineDirectionsBoat}
                title={t('homepage.feature-section.game-mechanics.title')}>
                {t('homepage.feature-section.game-mechanics.description')}
              </Feature>
              <Feature
                icon={MdOndemandVideo}
                title={t('homepage.feature-section.tutorials.title')}>
                {t('homepage.feature-section.tutorials.description')}
              </Feature>
              <Feature
                icon={MdUpdate}
                title={t('homepage.feature-section.continous-updates.title')}>
                {t('homepage.feature-section.continous-updates.description')}
              </Feature>
              <Feature
                icon={FaDiscord}
                title={t('homepage.feature-section.active-community.title')}>
                {t('homepage.feature-section.active-community.description')}
              </Feature>
            </Grid>
          </Container>
        </Box>

        <Box as='section' bg='blue.500'>
          <Container py='7.5rem' maxW='1280px' color='white'>
            <Box maxW='770px' mx='auto' textAlign='center' mb='56px'>
              <chakra.h2 textStyle='heading' mb='5'>
                {t('homepage.growing-section.title')}
              </chakra.h2>
              <chakra.p opacity={0.7} fontSize='lg'>
                {t('homepage.growing-section.description')}
              </chakra.p>
            </Box>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              maxW='880px'
              mx='auto'
              spacing='4rem'
              px={{ md: 12 }}>
              <StatBox
                icon={FiBookOpen}
                title={'23K'}
                description={t('homepage.growing-section.views-per-month')}
              />
              <StatBox
                icon={FiGithub}
                title={githubStars}
                description={t('homepage.growing-section.github-stars')}
              />
              <StatBox
                icon={FiUsers}
                title={contributors.length.toString()}
                description={t('homepage.growing-section.contributors')}
              />
              <StatBox
                icon={FaDiscord}
                title={discordMembers}
                description={t('homepage.growing-section.discord-members')}
              />
            </SimpleGrid>
          </Container>
        </Box>

        {/*         <Box bg='blue.500'> 
          <Container py='120px' maxW='1200px' px='32px' color='white'>
            <Box maxW='560px' mx='auto' textAlign='center' mb='56px'>
              <chakra.h2 textStyle='heading-2' mb='4'>
                {t('homepage.support-chakra-ui-section.title')}
              </chakra.h2>
              <Text fontSize='lg' opacity={0.7}>
                {t('homepage.support-chakra-ui-section.description')}
              </Text>
            </Box>

            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing='6'
              maxW='600px'
              mx='auto'
              bg='white'
              color='gray.800'
              shadow='md'
              rounded='lg'
              p='6'
            >
              <Stack flex='1' isInline spacing='6' pr={{ base: 0, md: '4' }}>
                <Icon h='40px' w='40px' viewBox='0 0 32 32'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M29.1531 6.8877C30.948 9.47379 31.9999 12.614 31.9999 16.0003C31.9999 19.3866 30.948 22.5271 29.1531 25.1129L25.0085 20.9684C25.8225 19.4957 26.2858 17.8019 26.2858 16.0003C26.2858 14.1987 25.8225 12.5052 25.0085 11.0325L29.1531 6.8877Z'
                    fill='#8FC7FF'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M25.1126 2.84685L20.9678 6.99138C19.4951 6.17745 17.8016 5.71417 16 5.71417C10.3194 5.71417 5.71418 10.3194 5.71418 16C5.71418 21.6806 10.3194 26.2858 16 26.2858C17.8016 26.2858 19.4951 25.8226 20.9678 25.0086L25.1126 29.1532C22.5265 30.948 19.3863 32 16 32C7.16352 32 0 24.8365 0 16C0 7.16351 7.16352 0 16 0C19.3863 0 22.5265 1.05197 25.1126 2.84685Z'
                    fill='#297EFF'
                  />
                </Icon>
                <Box flex='1'>
                  <Text fontSize='lg' fontWeight='bold' mt='-1'>
                    Open Collective
                  </Text>
                  <Text opacity={0.7}>
                    {t(
                      'homepage.support-chakra-ui-section.sponsor-the-chakra-ui-maintainers',
                    )}
                  </Text>
                </Box>
              </Stack>
              <LightMode>
                <Button
                  w={{ base: '100%', md: 'auto' }}
                  alignSelf='center'
                  as='a'
                  minW='7rem'
                  colorScheme='blue'
                  href={siteConfig.openCollective.url}
                  rel='noopener'
                  target='_blank'
                >
                  Sponsor
                </Button>
              </LightMode>
            </Stack>

            <Stack
              direction={{ base: 'column', md: 'row' }}
              maxW='600px'
              mt='6'
              mx='auto'
              bg='white'
              color='gray.800'
              shadow='md'
              rounded='lg'
              p='6'
            >
              <Stack flex='1' isInline spacing='6' pr={{ base: 0, md: '4' }}>
                <Icon w='40px' h='40px' viewBox='0 0 569 546'>
                  <g>
                    <circle
                      cx='362.589996'
                      cy='204.589996'
                      r='204.589996'
                      fill='#f96854'
                    />
                    <rect
                      fill='#052d49'
                      height='545.799988'
                      width='100'
                      x='0'
                      y='0'
                    />
                  </g>
                </Icon>
                <Box flex='1'>
                  <Text fontSize='lg' fontWeight='bold' mt='-1'>
                    Patreon
                  </Text>
                  <Text opacity={0.7}>
                    {t(
                      'homepage.support-chakra-ui-section.sponsor-the-creator',
                    )}
                  </Text>
                </Box>
              </Stack>
              <LightMode>
                <Button
                  w={{ base: '100%', md: 'auto' }}
                  alignSelf='center'
                  as='a'
                  minW='7rem'
                  colorScheme='blue'
                  href={siteConfig.patreon.url}
                  rel='noopener'
                  target='_blank'
									cursor='default'
                >
                  Sponsor
                </Button>
              </LightMode>
            </Stack>
          </Container>
        </Box> */}

        <DiscordStrip />

        <Footer />
      </Box>
    </>
  )
}

export async function getStaticProps() {
  const [{ prettyCount: githubStars }, { prettyCount: discordMembers }] =
    await Promise.all([getGithubStars(), getDiscordMembers()])

  const contributors = getAllContributors()

  return {
    props: {
      githubStars,
      contributors,
      discordMembers,
    },
  }
}

export default HomePage
