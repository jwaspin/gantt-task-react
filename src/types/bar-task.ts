import { Task, TaskType } from "./public-types";

export interface BarTask extends Task {
  index: number;
  typeInternal: TaskTypeInternal;
  x1: number;
  x2: number;
  x3?: number;
  x4?: number;
  y: number;
  height: number;
  barCornerRadius: number;
  handleWidth: number;
  barChildren: BarTask[];
}

export type TaskTypeInternal = TaskType | "smalltask";
