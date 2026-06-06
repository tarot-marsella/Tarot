import tarotData from "@/data/tarot.json";
import combinacionesManuales from "@/data/combinaciones-manuales.json";

export interface CombinationSection {
  title: string;
  content: string;
}

export interface CombinationFAQ {
  question: string;
  answer: string;
}

export interface Combination {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  bluf: string;
  sections: CombinationSection[];
  faqs: CombinationFAQ[];
}

export function getCombination(slug1: string, slug2: string): Combination | null {
  const card1 = tarotData.find((c) => c.slug === slug1);
  const card2 = tarotData.find((c) => c.slug === slug2);

  if (!card1 || !card2) return null;

  const slug = `${slug1}-y-${slug2}`;

  // Check manual overrides
  const manual = combinacionesManuales.find((m) => m.slug === slug);
  if (manual) return manual;

  // Symmetrical check if the order doesn't have an explicit manual override
  const symmetricalSlug = `${slug2}-y-${slug1}`;
  const manualSymmetrical = combinacionesManuales.find((m) => m.slug === symmetricalSlug);
  if (manualSymmetrical) {
    // Return the symmetrical one but adapt names if needed (or return as is)
    return {
      ...manualSymmetrical,
      slug,
      name: `${card1.name} y ${card2.name}`
    };
  }

  // Generate Programmatic Content (NLP templates in Spanish)
  const name = `${card1.name} y ${card2.name}`;
  const metaTitle = `Significado de ${card1.name} y ${card2.name} | Tarot de Marsella`;
  const metaDescription = `Descubre qué significa la combinación de ${card1.name} y ${card2.name} en el Tarot de Marsella. Interpretación para amor, trabajo y consejo.`;

  const cleanUpright1 = card1.meaning_upright.split(',')[0].toLowerCase();
  const cleanUpright2 = card2.meaning_upright.split(',')[0].toLowerCase();
  
  const bluf = `La combinación de ${card1.name} y ${card2.name} en el Tarot de Marsella representa el encuentro de ${cleanUpright1} con ${cleanUpright2}. En su aspecto más luminoso, sugiere un proceso donde la iniciativa o energía de ${card1.name} se canaliza y materializa a través de las cualidades de ${card2.name}.`;

  const sections: CombinationSection[] = [
    {
      title: "Significado General de la Combinación",
      content: `${card1.name} simboliza ${card1.meaning_upright.replace(/\.$/, "")}, mientras que ${card2.name} representa ${card2.meaning_upright.replace(/\.$/, "")}. Cuando estas dos cartas aparecen juntas en una lectura, indican un flujo dinámico: la energía activa de ${card1.name} actúa como el impulso inicial de tu consulta, mientras que ${card2.name} establece el desenlace o la forma en que debes asimilar ese impulso. Juntas sugieren que debes ${card1.advice.toLowerCase().replace(/\.$/, "")} y, al mismo tiempo, mantener la atención para ${card2.advice.toLowerCase()}`
    },
    {
      title: "Interpretación en el Amor y Relaciones",
      content: `En las relaciones sentimentales, la interacción de ${card1.name} y ${card2.name} revela un periodo de ajuste o renovación. ${card1.name} introduce una vibra de ${card1.meaning_upright.split(',')[1] || cleanUpright1}, lo que puede dinamizar el vínculo, mientras que ${card2.name} aporta ${card2.meaning_upright.split(',')[1] || cleanUpright2}. Para parejas, esta combinación aconseja equilibrar la pasión con la reflexión. Si estás soltero, te invita a prepararte internamente antes de tomar una decisión.`
    },
    {
      title: "Interpretación en el Trabajo, Dinero y Carrera",
      content: `En el plano profesional y económico, la presencia de estas cartas señala que tus metas laborales se beneficiarán de una estrategia bien estructurada. La fuerza emprendedora de ${card1.name} te da el empuje para comenzar, pero necesitarás la perseverancia y la sabiduría de ${card2.name} para consolidar tus finanzas. Es una excelente combinación para planificar proyectos de mediana a larga duración.`
    },
    {
      title: "Enfoque Psicológico y Evolutivo (Jung & Tarotología)",
      content: `Desde una perspectiva de crecimiento personal, estas cartas dialogan sobre la integración del ego y el ser. En términos junguianos, ${card1.name} simboliza la manifestación de ${card1.psychological_meaning.split('.')[0]}, mientras que ${card2.name} representa el proceso de individuación relacionado con ${card2.psychological_meaning.split('.')[0]}. Es una invitación a reconciliar tus metas conscientes con las pulsiones intuitivas de tu inconsciente.`
    }
  ];

  const faqs: CombinationFAQ[] = [
    {
      question: `¿Cuál es el consejo clave de ${card1.name} y ${card2.name}?`,
      answer: `El consejo principal de esta combinación es actuar de forma integrada. Se te pide que recuerdes: "${card1.advice.replace(/\.$/, "")}" y, a la vez, que apliques la sabiduría de: "${card2.advice}"`
    },
    {
      question: `¿Qué significa si alguna de las cartas sale invertida?`,
      answer: `Si una o ambas cartas aparecen invertidas en la tirada, indica un bloqueo de energía. Podrías estar experimentando dificultades asociadas a ${card1.meaning_reversed.split(',')[0].toLowerCase()} (por parte de ${card1.name}) o bien caer en ${card2.meaning_reversed.split(',')[0].toLowerCase()} (por parte de ${card2.name}). Revisa qué aspectos de tu vida están descompensados.`
    }
  ];

  return {
    slug,
    name,
    metaTitle,
    metaDescription,
    bluf,
    sections,
    faqs
  };
}

export function getAllCombinations(): Combination[] {
  const list: Combination[] = [];

  for (let i = 0; i < tarotData.length; i++) {
    for (let j = 0; j < tarotData.length; j++) {
      if (i === j) continue; // Skip combining a card with itself
      const comb = getCombination(tarotData[i].slug, tarotData[j].slug);
      if (comb) {
        list.push(comb);
      }
    }
  }

  return list;
}
