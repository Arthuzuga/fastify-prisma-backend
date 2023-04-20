import { z } from "zod";

export const getAnswerEntity = (param: unknown) => {
  const data = z.object({
    questionId: z.string(),
  });
  return data.parse(param);
};

export const createQuestionEntity = (param: unknown) => {
  const createQuestionEntity = z.object({
    title: z.string(),
    optionA: z.string(),
    optionB: z.string(),
    optionC: z.string(),
    optionD: z.string(),
    answer: z.string(),
  });

  return createQuestionEntity.parse(param);
};
