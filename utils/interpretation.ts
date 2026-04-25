export interface TarotCard {
  id: number;
  name: string;
  meaning_upright: string;
  meaning_reversed: string;
  advice: string;
  image_url: string;
}

export function generateInterpretation(cards: TarotCard[]): string {
  if (cards.length < 4) return "Tirada incompleta.";

  const [context, conflict, evolution, advice] = cards;

  return `Tu lectura revela lo siguiente:
  
El contexto actual de tu situación está influenciado por **${context.name}**, indicando ${context.meaning_upright.toLowerCase()}. 
Sin embargo, te enfrentas a una energía de **${conflict.name}**, que como desafío puede presentarse como ${conflict.meaning_reversed.toLowerCase()}. 
La evolución natural de este momento te lleva hacia **${evolution.name}**, sugiriendo ${evolution.meaning_upright.toLowerCase()}. 
Como consejo final, **${advice.name}** te recomienda: "${advice.advice}"

Recuerda que el tarot no indica un destino fijo, sino una energía presente en tu situación. Tú tienes el poder de transformar tu camino.`;
}
