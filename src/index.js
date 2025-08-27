import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ status: "ok", service: "node" });
});

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Server listening on ${port}`));
}

export default app;
