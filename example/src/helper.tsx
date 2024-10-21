import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      id: "doc1",
      type: "provider",
      name: "Doctor 1",
      start: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDay(),
        11,
        0
      ),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDay(),
        17,
        45
      ),
      hideChildren: false,
    },
    {
      id: "event1",
      type: "task",
      // typeInternal: "live-call",
      name: "Live Call session at 08/16/2024 10.58 AM",
      provider: "doc1",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2,
        12,
        28
      ),
      // transcriptionStart: new Date(
      //   currentDate.getFullYear(),
      //   currentDate.getMonth(),
      //   1
      // ),
    },
    {
      id: "event2",
      type: "task",
      name: "Patient 123",
      provider: "doc1",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
    },
    {
      id: "event3",
      type: "task",
      name: "Patient 456",
      provider: "doc1",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
    },
    {
      id: "Task 3",
      type: "task",
      name: "Developing",
      provider: "doc1",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
    },
    {
      id: "Task 4",
      type: "task",
      name: "Review",
      provider: "doc1",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
    },
    {
      id: "Task 6",
      type: "milestone",
      name: "Release",
      provider: "doc1",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    },
    {
      id: "Task 9",
      type: "task",
      name: "",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
    },
  ];
  return tasks;
}

export function getStartEndDateForProvider(tasks: Task[], providerId: string) {
  const providerTasks = tasks.filter(t => t.provider === providerId);
  let start = providerTasks[0].start;
  let end = providerTasks[0].end;

  for (let i = 0; i < providerTasks.length; i++) {
    const task = providerTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
