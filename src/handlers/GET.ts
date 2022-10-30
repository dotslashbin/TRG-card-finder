import type { Request, Response } from 'express';
import { ReturnError, ReturnSuccess } from '../helpers/Response';
import ScryfallFetcher from '../services/SryfallFetcher';

// eslint-disable-next-line import/prefer-default-export
export function FindCards(request: Request, response: Response) {
  const service = new ScryfallFetcher();
  const { query } = request.query;

  service
    .FetchData(`${query}`)
    .then((result) =>
      result.object !== 'error'
        ? ReturnSuccess(
            200,
            response,
            'get-cards',
            result,
            'Successfully fetched data from API source',
          )
        : ReturnError(result.status, response, result.code, result.details),
    )
    .catch((error) =>
      console.error('DEBUG ...', 'There was an error in the service..', error),
    );
}
