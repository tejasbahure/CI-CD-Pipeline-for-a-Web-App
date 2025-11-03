import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Deployed successfully via CI/CD on AWS EC2 🚀');
});

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, '0.0.0.0', () =>
  console.log(`Server listening on ${PORT}`));
}

export default app;
