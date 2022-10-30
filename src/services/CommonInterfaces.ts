export interface DataFetcher {
  FetchData(paramters: string): Promise<string | void>;
}
