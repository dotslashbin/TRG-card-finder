import axios from 'axios';
import type { DataFetcher } from './CommonInterfaces';

export default class ScryfallFetcher implements DataFetcher {
  private searchParams = '';
	private API_URL = 

  FetchData(input: string): string {
    this.searchParams = input;
    return `YOUR GAVE ME THIS: ${input}`;
  }
}
