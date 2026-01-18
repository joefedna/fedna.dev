/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.GITHUB_PAGES === 'true' && {
    output: 'export',
    images: {
      unoptimized: true,
    },
  }),
  ...(process.env.GITHUB_PAGES !== 'true' && {
    images: {
      unoptimized: true,
    },
  }),
}

module.exports = nextConfig
