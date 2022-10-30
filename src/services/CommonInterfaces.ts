export type SuccessfulAPICall = {
  object: string;
  total_cards: number;
  has_more: boolean;
  data: any;
};

export type FailedAPICall = {
  object: string;
  code: string;
  status: number;
  details: string;
};

export interface DataFetcher {
  FetchData(
    paramters: string,
  ): Promise<SuccessfulAPICall | FailedAPICall | void>;
}
