import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const tasks: Task[] = [
    {
      id: "doc1",
      type: "provider",
      name: "Doctor 1",
      tat_avg: 1.4,
      tat_min: 0.8,
      tat_max: 2.1,
      red_team_count: 2,
      dictation_count: 3,
      live_call_count: 3,
      start: new Date(2024, 7, 16, 10, 58),
      end: new Date(2024, 7, 16, 17, 45),
      hideChildren: false,
      displayOrder: 1,
    },
    {
      id: "event1",
      type: "task",
      // taskType: "live_call",
      name: "Live Call session at 08/16/2024 10.58 AM",
      provider: "doc1",
      start: new Date(2024, 7, 16, 10, 58),
      end: new Date(2024, 7, 16, 13, 10),
      transcriptionStart: new Date(2024, 7, 16, 14, 0),
      transcriptionEnd: new Date(2024, 7, 16, 14, 50),
      displayOrder: 2,
    },
    {
      id: "event2",
      type: "task",
      // taskType: "dictation",
      name: "C W",
      provider: "doc1",
      start: new Date(2024, 7, 16, 12, 33),
      end: new Date(2024, 7, 16, 12, 39),
      transcriptionStart: new Date(2024, 7, 16, 13, 10),
      transcriptionEnd: new Date(2024, 7, 16, 13, 40),
      displayOrder: 3,
    },
    {
      id: "event3",
      type: "task",
      name: "L C",
      provider: "doc1",
      start: new Date(2024, 7, 16, 13, 11),
      end: new Date(2024, 7, 16, 13, 20),
      transcriptionStart: new Date(2024, 7, 16, 13, 30),
      transcriptionEnd: new Date(2024, 7, 16, 13, 40),
      displayOrder: 4,
    },
    {
      id: "Task 3",
      type: "task",
      name: "L B",
      provider: "doc1",
      start: new Date(2024, 7, 16, 14, 50),
      end: new Date(2024, 7, 16, 15, 12),
      displayOrder: 5,
    },
    {
      id: "Task 4",
      type: "task",
      name: "Live Call session at 08/16/2024 03.08 PM",
      provider: "doc1",
      start: new Date(2024, 7, 16, 15, 8),
      end: new Date(2024, 7, 16, 15, 38),
      displayOrder: 6,
    },
    {
      id: "Task 6",
      type: "task",
      name: "C B",
      provider: "doc1",
      start: new Date(2024, 7, 16, 16, 30),
      end: new Date(2024, 7, 16, 17, 6),
      displayOrder: 7,
    },
    {
      id: "Task 9",
      type: "task",
      name: "Live Call session at 08/16/2024 05.05 PM",
      provider: "doc1",
      start: new Date(2024, 7, 16, 17, 5),
      end: new Date(2024, 7, 16, 17, 48),
      displayOrder: 8,
    },
    {
      id: "doc2",
      type: "provider",
      name: "Doctor 2",
      tat_avg: 1.5,
      tat_min: 0.9,
      tat_max: 2.2,
      red_team_count: 0,
      dictation_count: 5,
      live_call_count: 0,
      start: new Date(2024, 7, 16, 12, 55),
      end: new Date(2024, 7, 16, 16, 50),
      hideChildren: true,
      displayOrder: 9,
    },
    {
      id: "doc3",
      type: "provider",
      name: "Doctor 3",
      tat_avg: 1.3,
      tat_min: 0.7,
      tat_max: 2.0,
      red_team_count: 0,
      dictation_count: 2,
      live_call_count: 1,
      start: new Date(2024, 7, 16, 17, 30),
      end: new Date(2024, 7, 16, 19, 0),
      hideChildren: true,
      displayOrder: 10,
    },
    {
      id: "doc4",
      type: "provider",
      name: "Doctor 4",
      tat_avg: 1.6,
      tat_min: 0.8,
      tat_max: 2.4,
      red_team_count: 3,
      dictation_count: 5,
      live_call_count: 2,
      start: new Date(2024, 7, 16, 9, 30),
      end: new Date(2024, 7, 16, 14, 10),
      hideChildren: true,
      displayOrder: 11,
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
