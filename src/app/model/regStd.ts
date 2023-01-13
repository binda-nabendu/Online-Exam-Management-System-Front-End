import {regPerson} from "./regPerson";

export interface regStd extends regPerson{
  deptId: string,
  semester: string
}
