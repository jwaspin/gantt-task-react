import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      blue: 2,
      red: 2,
      green: 3,
      gray: 1,
      name: "Doctor 1",
      id: "dr1",
      progress: 0,
      type: "project",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2,
        12,
        28
      ),
      blue: 2,
      red: 2,
      green: 3,
      gray: 1,
      name: "Doctor 2",
      id: "dr2",
      progress: 0,
      type: "project",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      blue: 2,
      red: 2,
      green: 3,
      gray: 1,
      name: "Doctor 3",
      id: "dr3",
      progress: 0,
      type: "project",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      blue: 2,
      red: 2,
      green: 3,
      gray: 1,
      name: "Doctor 4",
      id: "dr4",
      progress: 0,
      type: "project",
    },
  ];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
