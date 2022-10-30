export interface DataFetcher {
  FetchData(paramters: string): Promise<void>;
}
