import type { Request, Response } from 'express';
import axios from 'axios';
import { ReturnSuccess, ReturnError } from '../helpers/Response';

// eslint-disable-next-line import/prefer-default-export
export async function FindCards(_request: Request, response: Response) {
  ReturnSuccess(
    200,
    response,
    'get-cards',
    { foo: 'bar', another: 'one' },
    'Successfully fetched something',
  );

  // return axios.get('https://api.scryfall.com/cards/search?q=blue');
}
