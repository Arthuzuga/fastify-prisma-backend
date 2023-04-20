import Fastify from "fastify";
import { questionRoutes } from "./routes/questions";

const app = Fastify({
  logger: true,
});

app.register(questionRoutes);

app.listen(
  { port: process.env.PORT ? Number(process.env.PORT) : 3001 },
  (err) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
    app.log.info({}, "I AM ALIVE!");
  }
);
