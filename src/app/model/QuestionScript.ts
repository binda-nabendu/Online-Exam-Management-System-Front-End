import {IndividualQuestion} from "./IndividualQuestion";

export interface QuestionScript{
  teacherId: string;
  courseCode: string;
  deptId: string;
  percentageValue: number;
  startingDateTime: string;
  endingDateTime: string;
  courseSession: number;
  total: number;
  allIndividualQuestions:IndividualQuestion[];
}
