import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import { getCombination, getAllCombinations } from "@/utils/combinations";
import Breadcrumb from "@/components/Breadcrumb";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const parts = slug.split("-y-");
  if (parts.length !== 2) return { title: "Combinación no encontrada" };

  const comb = getCombination(parts[0], parts[1]);
  if (!comb) return { title: "Combinación no encontrada" };

  const url = `https://tarotdemarsella.cl/aprendizaje/combinaciones/${comb.slug}`;
  return {
    title: comb.metaTitle,
    description: comb.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: comb.metaTitle,
      description: comb.metaDescription,
      url,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const combinations = getAllCombinations();
  return combinations.map((c) => ({ slug: c.slug }));
}

export default async function CombinacionDetailPage({ params }: Props) {
  const { slug } = await params;
  const parts = slug.split("-y-");
  if (parts.length !== 2) notFound();

  const comb = getCombination(parts[0], parts[1]);
  if (!comb) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: comb.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comb.name,
    description: comb.metaDescription,
    author: { "@type": "Organization", name: "Tarot de Marsella" },
    publisher: {
      "@type": "Organization",
      "name": "Tarot de Marsella",
      "url": "https://tarotdemarsella.cl",
    },
  };

  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <Breadcrumb
        items={[
          { label: "Inicio", href: "/" },
          { label: "Academia", href: "/aprendizaje" },
          { label: "Combinaciones", href: "/aprendizaje/combinaciones" },
          { label: comb.name },
        ]}
      />

      <article className={`fade-in ${styles.article}`}>
        <header className={styles.header}>
          <span className={styles.tag}>Combinación de Arcanos</span>
          <h1 className={styles.title}>{comb.name}</h1>
          <div className={styles.divider} />
          <p className={styles.bluf}><strong>{comb.bluf}</strong></p>
        </header>

        {comb.sections.map((section, i) => (
          <section key={i} className={styles.section}>
            <h2>{section.title}</h2>
            <p className={styles.text}>{section.content}</p>
          </section>
        ))}

        <section className={styles.faqSection}>
          <h2>Preguntas Frecuentes</h2>
          <div className={styles.faqs}>
            {comb.faqs.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={styles.navLinks}>
          <Link href="/aprendizaje/combinaciones" className={styles.backLink}>← Todas las Combinaciones</Link>
          <Link href="/tirada" className={styles.ctaButton}>Hacer Tirada Gratis →</Link>
        </div>
      </article>
    </main>
  );
}
