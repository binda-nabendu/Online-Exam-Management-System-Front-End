import {Option} from "./Option";

export interface IndividualQuestion{
  questionNo: number;
  question: string;
  mark: number;
  allOptions: Option[];
}
