import { MetadataRoute } from 'next'
import tarotData from '@/data/tarot.json'
import tiradasData from '@/data/tiradas-seo.json'
import guiasData from '@/data/guias-seo.json'
import conceptosData from '@/data/conceptos-seo.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tarotdemarsella.cl'

  // Silo 1: 22 Arcanos Mayores
  const arcanoUrls = tarotData.map((card) => ({
    url: `${baseUrl}/aprendizaje/${card.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Silo 2: 10 Tiradas
  const tiradaUrls = tiradasData.map((tirada) => ({
    url: `${baseUrl}/tiradas/${tirada.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Silo 3: Guías Prácticas
  const guiaUrls = guiasData.map((guia) => ({
    url: `${baseUrl}/aprendizaje/guias/${guia.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Silo 4: Conceptos Evergreen
  const conceptoUrls = conceptosData.map((concepto) => ({
    url: `${baseUrl}/aprendizaje/conceptos/${concepto.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog Articles
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
    'como-hacer-preguntas-tarot',
  ]

  const blogUrls = blogArticles.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    // Core pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tirada`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    // Hubs principales
    {
      url: `${baseUrl}/aprendizaje`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tiradas`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Sub-hubs de Academia
    {
      url: `${baseUrl}/aprendizaje/guias`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/aprendizaje/conceptos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre-nosotros`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    // Silo 1: Arcanos
    ...arcanoUrls,
    // Silo 2: Tiradas
    ...tiradaUrls,
    // Silo 3: Guías
    ...guiaUrls,
    // Silo 4: Conceptos
    ...conceptoUrls,
    // Blog
    ...blogUrls,
  ]
}
