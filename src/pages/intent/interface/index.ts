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

export interface IIntentlist {
  id: string;
  displayName: string;
}

export interface IIntentDetail{
  map(arg0: (item: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  trainingPhraseText?:string[];
  textResponse?:string[];
  imageResponse?:string[];
}


