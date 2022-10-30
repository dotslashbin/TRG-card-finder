export interface DataFetcher {
  FetchData(paramters: string): Promise<{ total: any; data: any } | void>;
}
