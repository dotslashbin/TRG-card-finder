import express from 'express';
import handlers from '../handlers';

/**
 * Route definitions with references to handlers
 */
export default ({ app }: { app: express.Application }): void => {
  // Index -> shows version
  app.get('/', (_request, response) => {
    response.status(200);
    response.send('The API server is running just fine...');
  });

  app.get('/find-cards', express.json({}), handlers.FindCards);
};
