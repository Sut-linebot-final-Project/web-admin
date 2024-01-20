export interface IDataList {
  id: string;
  title: string;
}

export interface IIntent {
  id: string;
  intentName: string;
  trainingPhrases: IDataList[];
  perponse: IDataList[];
}
