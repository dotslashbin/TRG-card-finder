import type { Request, Response } from 'express';
import { ReturnSuccess } from '../helpers/Response';
import ScryfallFetcher from '../services/SryfallFetcher';

// eslint-disable-next-line import/prefer-default-export
export async function FindCards(_request: Request, response: Response) {
  const service = new ScryfallFetcher();

  ReturnSuccess(
    200,
    response,
    'get-cards',
    { foo: 'bar', another: service.FetchData('testing lang') },
    'Successfully fetched something',
  );

  // return axios.get('https://api.scryfall.com/cards/search?q=blue');
}
