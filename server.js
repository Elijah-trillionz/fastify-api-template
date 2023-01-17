const app = require("fastify")({ logger: true });
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.register(require("@fastify/cors"), {
  origin: ["http://localhost:3000"],
});

app.get("/", (req, reply) => {
  reply.send("Hello world");
});

(async () => {
  try {
    await app.listen({ port: PORT });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();
