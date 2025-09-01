import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('OK');
});

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
}

export default app;
