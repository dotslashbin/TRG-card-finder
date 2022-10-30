import axios from 'axios';
import * as dotenv from 'dotenv';

// types
import type { DataFetcher } from './CommonInterfaces';

dotenv.config();

export default class ScryfallFetcher implements DataFetcher {
  private searchParams = '';

  private directory = 'cards';

  private queryPrefix = 'search?q';

  private API_URL = process.env['API_SOURCE'];

  async FetchData(input: string): Promise<any> {
    this.searchParams = input;

    return axios
      .get(
        `${this.API_URL}/${this.directory}/${this.queryPrefix}=${this.searchParams}`,
      )
      .then((result) => result.data)
      .catch((error) => error.response.data);
  }
}
