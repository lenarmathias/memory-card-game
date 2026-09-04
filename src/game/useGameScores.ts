import { useState, useEffect } from 'react';
import type { Difficulty } from './useGame';

type Scores = {
  easy: number | null;
  medium: number | null;
  hard: number | null;
};

const getSavedScores = (): Scores => {
  const savedScores = localStorage.getItem("scores");

  if (savedScores) {
    const parsedScores = JSON.parse(savedScores);

    return parsedScores;
  }

  return {
    easy: null,
    medium: null,
    hard: null
  };
};

export const useGameScores = () => {
  const [scores, setScores] = useState<Scores>(getSavedScores);

  useEffect(() => {
    localStorage.setItem("scores", JSON.stringify(scores));
  }, [scores]);

  const saveScore = (
    difficulty: Difficulty,
    wrongCounter: number
  ) => {
    const previousScore = scores[difficulty];

    if (
      previousScore === null ||
      previousScore > wrongCounter
    ) {
      setScores(previous => ({
        ...previous,
        [difficulty]: wrongCounter
      }));
    }
  };

  return { scores, saveScore };
};
