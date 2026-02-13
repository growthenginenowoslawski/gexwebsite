import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/articles'

const BASE_URL = 'https://coldoutbound.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles()

  // Use the newest article publish date as a stable "site updated" signal.
  const latestPublished =
    articles.length > 0 && articles[0].published
      ? new Date(articles[0].published)
      : null

  const siteLastModified =
    latestPublished && !Number.isNaN(latestPublished.getTime())
      ? latestPublished
      : undefined

  const entries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: siteLastModified,
    },
    {
      url: `${BASE_URL}/growth-drops`,
      lastModified: siteLastModified,
    },
  ]

  for (const article of articles) {
    const publishedDate = new Date(article.published)
    entries.push({
      url: `${BASE_URL}/growth-drops/${article.slug}`,
      lastModified: Number.isNaN(publishedDate.getTime()) ? undefined : publishedDate,
    })
  }

  return entries
}

