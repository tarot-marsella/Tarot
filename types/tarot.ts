export interface AspectMeaning {
  derecho: string;
  invertido: string;
}

export interface CardExperience {
  emociones_predominantes: string[];
  pensamientos_habituales: string[];
  sensaciones_corporales: string[];
  comportamiento: string;
  conflictos_internos: string;
  oportunidades_crecimiento: string;
  aprendizaje: string;
  integracion: string;
  senales_evolucion: string;
  senales_bloqueo: string;
  manifestaciones_cotidianas: string;
}

export interface CombinationReference {
  carta: string;
  significado: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ResourceLink {
  titulo: string;
  url: string;
}

export interface CartaEnriquecida {
  id: number;
  slug: string;
  name: string;
  numeral: string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  
  // 1. Introducción y Conceptos Básicos
  introduccion: string;
  historia: string;
  
  // 2. Simbología e Iconografía
  simbologia: string;
  iconografia: string;
  elemento: string;
  numerologia: string;
  
  // 3. Correspondencias y Arquetipos
  correspondencias: string;
  arquetipo: string;
  
  // 4. Significado Esencial y Dualidad
  significado_esencial: string;
  significado_luminoso: string;
  significado_sombra: string;
  
  // 5. Lecturas de la Vida Cotidiana
  amor: AspectMeaning;
  trabajo: AspectMeaning;
  finanzas: AspectMeaning;
  salud_emocional: string;
  desarrollo_personal: string;
  espiritualidad: string;
  
  // 6. Experiencia de la Carta (Vivencial)
  experiencia: CardExperience;
  
  // 7. Consejos y Pedagogía
  consejo: string;
  preguntas_reflexionar: string[];
  errores_comunes_interpretacion: string[];
  
  // 8. Relaciones e Interlinking
  relaciones_mismo_palo: string[];
  relaciones_arcanos_mayores: string[];
  combinaciones_frecuentes: CombinationReference[];
  ejemplos_lectura: string[];
  faqs: FAQItem[];
  recursos_relacionados: ResourceLink[];
}
