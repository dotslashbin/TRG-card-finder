import express from 'express';

const port = 3001;

export default async function startServer() {
  const app = express();

  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  await require('./loaders').default(app);

  app
    .listen(port, () => {
      console.log(`The server is running on port ${port}`);
    })
    .on('error', (error: any) => {
      console.error(`Express failed: ${error}`);
    });
}

startServer();
