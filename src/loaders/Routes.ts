import type express from 'express';

/**
 * Route definitions with references to handlers
 */
export default ({ app }: { app: express.Application }): void => {
  // Index -> shows version
  app.get('/', (_request, response) => {
    response.status(200);
    response.send('jhahahah');
  });

  // app.get('/personal-data', express.urlencoded({ extended: true }), Fetch);
  // app.post('/personal-data', express.json({ limit: '500kb' }), Create);
};
