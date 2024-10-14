import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        15,
        11,
        0
      ),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        15,
        17,
        45
      ),
      blue: 2,
      red: 2,
      green: 3,
      gray: 1,
      name: "Doctor 1",
      id: "dr1",
      progress: 0,
      type: "project",
      hideChildren: false,
      tat_avg: 1.4,
    },
    {
      start: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        15,
        11,
        55
      ),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        15,
        16,
        45
      ),
      blue: 2,
      red: 3,
      green: 1,
      gray: 0,
      name: "Doctor 2",
      id: "dr2",
      progress: 0,
      type: "project",
      hideChildren: false,
      tat_avg: 1.8,
    },
    {
      start: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        15,
        14,
        45
      ),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        15,
        20,
        50
      ),
      blue: 4,
      red: 1,
      green: 1,
      gray: 0,
      name: "Doctor 3",
      id: "dr3",
      progress: 0,
      type: "project",
      hideChildren: false,
      tat_avg: 1.1,
    },
    {
      start: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        15,
        8,
        55
      ),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        15,
        14,
        0
      ),
      blue: 3,
      red: 3,
      green: 2,
      gray: 1,
      name: "Doctor 4",
      id: "dr4",
      progress: 0,
      type: "project",
      hideChildren: false,
      tat_avg: 2.3,
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
