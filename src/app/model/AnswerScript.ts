import {QuestionOptionPair} from "./QuestionOptionPair";

export interface AnswerScript{
  stdId: string;
  examId: number;
  allQuestionAnswer: QuestionOptionPair[];
}
