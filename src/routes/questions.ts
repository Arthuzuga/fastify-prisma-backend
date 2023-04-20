import { FastifyInstance } from "fastify";
import { createQuestion, getAnswer, getQuestions } from "../services/questions";
import { createQuestionEntity, getAnswerEntity } from "../entities/questions";

export const questionRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/questions", async (_, reply) => {
    const questions = await getQuestions();
    reply.send({ questions });
  });

  fastify.get("/answer/:questionId", async (request, reply) => {
    const { questionId } = getAnswerEntity(request.params);
    const answer = await getAnswer(questionId);
    reply.send({ answer });
  });

  fastify.post("/questions", async (request, reply) => {
    const data = createQuestionEntity(request.body);

    await createQuestion(data);

    reply.status(201);
  });
};
