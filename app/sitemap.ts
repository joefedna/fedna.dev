export const baseUrl = 'https://fedna.dev'
export const dynamic = 'force-static'

export default async function sitemap() {
  let routes = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
