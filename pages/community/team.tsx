import {
  Circle,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import fs from 'fs'
import MDXLayout from 'layouts/mdx'
import NextImage from 'next/image'
import { FaDiscord } from 'react-icons/fa'
import { Contributor, Member as IMember, FormerMember as IFormerMember } from 'src/types/contributors-members'
import { t } from 'utils/i18n'

function Member(props: { member: IMember }) {
  const {
    avatar_url: avatarUrl,
    bio,
    name,
    discord_username: discordUsername,
  } = props.member

  return (
    <Stack direction='row' spacing={6} align='flex-start'>
      <Circle overflow='hidden' bg='gray.50'>
        <NextImage src={avatarUrl} width='96' height='96' alt={name} />
      </Circle>
      <Stack spacing={3} maxW='320px'>
        <Text fontWeight='bold'>{name}</Text>

        <Stack align='flex-start' direction='column' spacing={2}>
					{discordUsername && (
						<Stack direction='row'>
            	<Icon
								as={FaDiscord}
								w={5}
								h={5}
								color='teal.300'
							/>
				      <Text fontSize='sm' color='fg-muted'>
          			{discordUsername}
        			</Text>
						</Stack>
          )}
        </Stack>
        <Text fontSize='sm' color='fg-muted'>
          {bio}
        </Text>
      </Stack>
    </Stack>
  )
}

function FormerMember({ formerMember }: { formerMember: IFormerMember }) {
  return (
    <VStack spacing={2}>
      <Circle overflow='hidden' bg='gray.50'>
        <NextImage
          src={formerMember.avatar_url}
          width='96'
          height='96'
          alt={formerMember.name}
        />
      </Circle>
      <Text
        fontSize='md'
        align='center'
      >
        {formerMember.name}
      </Text>
    </VStack>
  )
}

interface TeamProps {
  members: IMember[]
  formerMembers: IFormerMember[]
  contributors: Contributor[]
}

function Team({ members, formerMembers, contributors }: TeamProps) {
  return (
    <MDXLayout
      frontmatter={{
        title: t('team.seo.title'),
        description: t('team.seo.description'),
        slug: '/community/team',
      }}
    >
      <Text lineHeight='tall' mt='5'>
        {t('team.message')}
      </Text>

      <Stack spacing={8} mt='20'>
        <Heading size='lg'>{t('team.core-team')}</Heading>
        <SimpleGrid columns={[1, 1, 2]} spacing='40px' pt='3'>
          {members.map((member) => (
            <Member key={member.name} member={member} />
          ))}
        </SimpleGrid>

        {formerMembers?.length && (
          <Stack spacing='8' pt='4'>
            <Text textStyle='caps' textTransform='uppercase' opacity='0.7'>
              {t('team.former-members')}
            </Text>
            <SimpleGrid columns={[2, 2, 6]} spacing='40px'>
              {formerMembers.map(
                (member) =>
                  member.name && (
                    <FormerMember
                      key={member.name}
                      formerMember={member}
                    />
                  ),
              )}
            </SimpleGrid>
          </Stack>
        )}
      </Stack>

      <Stack spacing={8} mt={{ base: '10', md: '24' }}>
        <Heading size='lg'>{t('team.project-contributors')}</Heading>
        <Wrap spacing='3'>
          {contributors.map((contributor) => (
            <Circle overflow='hidden' key={contributor.name}>
              <NextImage
                width={48}
                height={48}
                src={contributor.avatar_url}
                alt={contributor.name}
              />
            </Circle>
          ))}
        </Wrap>
      </Stack>
    </MDXLayout>
  )
}

export async function getStaticProps() {
	// TODO: use the functions for these
  /**
   * Read the profile/bio of each member from `.all-membersrc` file
   * to avoid overfetching from Github
   */
  const { members } = JSON.parse(fs.readFileSync('.all-membersrc', 'utf-8'))

  /**
   * Read former members from `.all-former-membersrc` file
   * to avoid overfetching from Github
   */
  const { formerMembers } = JSON.parse(
    fs.readFileSync('.all-former-membersrc', 'utf-8'),
  )

  /**
   * Read contributors from `.all-contributorsrc` file
   * to avoid overfetching from Github
   */
  const { contributors } = JSON.parse(
    fs.readFileSync('.all-contributorsrc', 'utf-8'),
  )

  return {
    props: {
      members,
      formerMembers,
      contributors,
    },
  }
}

export default Team
