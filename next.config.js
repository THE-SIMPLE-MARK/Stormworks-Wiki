// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  optimizeFonts: true,
  images: {
    domains: [
      'img.youtube.com',
      'avatars.githubusercontent.com',
      'github.com',
      'avatars0.githubusercontent.com',
      'avatars1.githubusercontent.com',
      'avatars2.githubusercontent.com',
      'avatars3.githubusercontent.com',
      'res.cloudinary.com',
      'cdn.discordapp.com',
    ],
  },
  productionBrowserSourceMaps: true,
  redirects: require('./next-redirect'),
  reactStrictMode: true,
}

module.exports = nextConfig;