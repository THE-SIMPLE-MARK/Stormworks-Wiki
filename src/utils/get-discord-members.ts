import { numberFormatter } from './number-formatter'

export async function getDiscordMembers() {
  let count: number

  try {
    const data = await fetch(
      'https://discord.com/api/v9/invites/Wc2xp89Npd?with_counts=true'
    ).then(res => res.json())

    count = data.approximate_member_count
  } catch (error) {
    count = 378
  }

  return {
    count,
    prettyCount: numberFormatter.format(count),
  }
}
