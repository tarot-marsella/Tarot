import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import guiasData from "@/data/guias-seo.json";
import Breadcrumb from "@/components/Breadcrumb";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guia = guiasData.find((g) => g.slug === slug);
  if (!guia) return { title: "Guía no encontrada" };
  const url = `https://tarotdemarsella.cl/aprendizaje/guias/${guia.slug}`;
  return {
    title: guia.metaTitle,
    description: guia.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: guia.metaTitle, description: guia.metaDescription, url, type: "article" },
  };
}

export async function generateStaticParams() {
  return guiasData.map((g) => ({ slug: g.slug }));
}

export default async function GuiaDetailPage({ params }: Props) {
  const { slug } = await params;
  const guia = guiasData.find((g) => g.slug === slug);
  if (!guia) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guia.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guia.name,
    description: guia.metaDescription,
    author: { "@type": "Organization", name: "Tarot de Marsella" },
    publisher: { "@type": "Organization", name: "Tarot de Marsella", url: "https://tarotdemarsella.cl" },
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Academia", href: "/aprendizaje" },
          { label: "Guías Prácticas", href: "/aprendizaje/guias" },
          { label: guia.name },
        ]}
      />

      <article className={`fade-in ${styles.article}`}>
        <header className={styles.header}>
          <span className={styles.tag}>Guía Práctica</span>
          <h1 className={styles.title}>{guia.name}</h1>
          <div className={styles.divider} />
          <p className={styles.bluf}><strong>{guia.bluf}</strong></p>
        </header>

        <section className={styles.section}>
          <p className={styles.intro}>{guia.intro}</p>
        </section>

        {guia.sections.map((section, i) => (
          <section key={i} className={styles.section}>
            <h2>{section.title}</h2>
            <p className={styles.text}>{section.content}</p>
          </section>
        ))}

        <section className={styles.faqSection}>
          <h2>Preguntas Frecuentes</h2>
          <div className={styles.faqs}>
            {guia.faqs.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.navLinks}>
          <Link href="/aprendizaje/guias" className={styles.backLink}>← Todas las Guías</Link>
          <Link href="/tirada" className={styles.ctaButton}>Hacer Tirada Gratis →</Link>
        </div>
      </article>
    </main>
  );
}
