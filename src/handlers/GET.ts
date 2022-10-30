import type { Request, Response } from 'express';
import { ReturnError, ReturnSuccess } from '../helpers/Response';
import ScryfallFetcher from '../services/SryfallFetcher';

// eslint-disable-next-line import/prefer-default-export
export async function FindCards(request: Request, response: Response) {
  const service = new ScryfallFetcher();
  const { query } = request.query;

  await service
    .FetchData(`${query}`)
    .then((result) => {
      ReturnSuccess(200, response, 'get-cards', result, 'success');
    })
    .catch((error) => {
      console.error('TET LANG ', error);
      ReturnError(400, response, error, 'Failed to fetch data from source');
    });
}
