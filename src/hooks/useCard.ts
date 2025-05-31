import { useState } from 'react';
import { TCard } from '../utils/types';

export const useCard = (initialCard: TCard) => {
  const [card, setCard] = useState<TCard>(initialCard);

  const updateField = (field: keyof TCard, value: string) => {
    setCard(prev => ({ ...prev, [field]: value }));
  };

  return { card, updateField };
};