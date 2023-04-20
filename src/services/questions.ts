import { PrismaClient } from "@prisma/client";

interface ICreateQuestion {
  title: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  answer: string;
}

const prisma = new PrismaClient();

export const getQuestions = async () => {
  return await prisma.question.findMany();
};

export const getQuestionById = async (id: string) => {
  return await prisma.question.findFirst({
    where: {
      id,
    },
  });
};

export const getAnswer = async (id: string) => {
  const question = await prisma.question.findFirst({
    where: {
      id,
    },
  });
  return question?.answer;
};

export const createQuestion = async (data: ICreateQuestion) => {
  return await prisma.question.create({
    data,
  });
};

export const updateQuestion = async (id: string, data: ICreateQuestion) => {
  return await prisma.question.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteQuestion = async (id: string) => {
  return await prisma.question.delete({
    where: {
      id,
    },
  });
};
