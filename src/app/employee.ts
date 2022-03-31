import { Department } from './department';
import { Skill } from './skill';
export interface Employee {
  id: number;
  name: string;
  salary: number;
  department: Department;
  skill: Skill[];
  permanent: boolean;
  dateOfBirth: Date;
}
