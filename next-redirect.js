async function redirect() {
  return [
    {
      source: '/discord',
      destination: 'https://discord.gg/Wc2xp89Npd',
      permanent: true,
    },
    // GENERAL
    {
      source: '/world-locations',
      destination: '/wiki/world-locations',
      permanent: true,
    },
		{
      source: '/wiki',
      destination: '/wiki/components',
      permanent: true,
    },
    {
      source: '/standards',
      destination: '/wiki/standards',
      permanent: true,
    },
    {
      source: '/tutorials',
      destination: '/wiki/tutorials',
      permanent: true,
    },
    {
      source: '/community',
      destination: '/wiki/community',
      permanent: true,
    },
  ]
}

module.exports = redirect
