import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import conceptosData from "@/data/conceptos-seo.json";
import Breadcrumb from "@/components/Breadcrumb";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const concepto = conceptosData.find((c) => c.slug === slug);
  if (!concepto) return { title: "Concepto no encontrado" };
  const url = `https://tarotdemarsella.cl/aprendizaje/conceptos/${concepto.slug}`;
  return {
    title: concepto.metaTitle,
    description: concepto.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: concepto.metaTitle, description: concepto.metaDescription, url, type: "article" },
  };
}

export async function generateStaticParams() {
  return conceptosData.map((c) => ({ slug: c.slug }));
}

export default async function ConceptoDetailPage({ params }: Props) {
  const { slug } = await params;
  const concepto = conceptosData.find((c) => c.slug === slug);
  if (!concepto) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: concepto.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: concepto.name,
    description: concepto.metaDescription,
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
          { label: "Conceptos", href: "/aprendizaje/conceptos" },
          { label: concepto.name },
        ]}
      />

      <article className={`fade-in ${styles.article}`}>
        <header className={styles.header}>
          <span className={styles.tag}>Concepto Esencial</span>
          <h1 className={styles.title}>{concepto.name}</h1>
          <div className={styles.divider} />
          <p className={styles.bluf}><strong>{concepto.bluf}</strong></p>
        </header>

        <section className={styles.section}>
          <p className={styles.intro}>{concepto.intro}</p>
        </section>

        {concepto.sections.map((section, i) => (
          <section key={i} className={styles.section}>
            <h2>{section.title}</h2>
            <p className={styles.text}>{section.content}</p>
          </section>
        ))}

        <section className={styles.faqSection}>
          <h2>Preguntas Frecuentes</h2>
          <div className={styles.faqs}>
            {concepto.faqs.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.navLinks}>
          <Link href="/aprendizaje/conceptos" className={styles.backLink}>← Todos los Conceptos</Link>
          <Link href="/aprendizaje" className={styles.ctaButton}>Ver Arcanos Mayores →</Link>
        </div>
      </article>
    </main>
  );
}
