import data from "./data.json";
import type { QuizQuestion } from "./types";

export const getQuizData = (): QuizQuestion[] => {
  return data;
};
