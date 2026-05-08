import { MetadataRoute } from 'next'
import tarotData from '@/data/tarot.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tarotdemarsella.cl'

  const cardUrls = tarotData.map((card) => ({
    url: `${baseUrl}/aprendizaje/${card.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogArticles = [
    'como-leer-cartas-tarot-marsella',
    'tirada-tarot-gratis-tres-cartas',
    'significado-arcanos-mayores-tarot-marsella',
    'tarot-online-gratis',
    'el-loco-tarot-marsella-significado',
    'mejores-tarotistas-online',
    'historia-tarot-marsella',
    'tirada-cruz-celta-tarot',
    'tarot-amor-gratis',
    'como-hacer-preguntas-tarot'
  ]

  const blogUrls = blogArticles.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/tirada`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/aprendizaje`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...cardUrls,
    ...blogUrls,
  ]
}
