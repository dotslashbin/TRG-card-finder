import axios from 'axios';
import * as dotenv from 'dotenv';
import type { DataFetcher } from './CommonInterfaces';

dotenv.config();

export default class ScryfallFetcher implements DataFetcher {
  private searchParams = '';

  private directory = 'cards';

  private queryPrefix = 'search?q';

  private API_URL = process.env['API_SOURCE'];

  FetchData(input: string): Promise<{ total: number; data: any[] } | void> {
    this.searchParams = input;

    return axios
      .get(
        `${this.API_URL}/${this.directory}/${this.queryPrefix}=${this.searchParams}`,
      )
      .then((result) => ({
        total: result.data.total_cards,
        data: result.data.data,
      }))
      .catch((error) => console.error(error));
  }
}
