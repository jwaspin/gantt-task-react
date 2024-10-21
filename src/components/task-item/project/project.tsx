import React from "react";
import { TaskItemProps } from "../task-item";
import styles from "./project.module.css";

// const getTatColor = (
//   task: TaskItemProps["task"] /* , isSelected: boolean */
// ) => {
//   const { tat_avg } = { ...task };
//   if (tat_avg < 1.5) {
//     return "#00FF00";
//   }
//   if (tat_avg < 2.0) {
//     return "#FFFF00";
//   }
//   return "#FF0000";
// };

export const Project: React.FC<TaskItemProps> = ({ task }) => {
  const barColor = "#00FF00"; // getTatColor(task);
  const projectWith = task.x2 - task.x1;

  return (
    <g tabIndex={0} className={styles.projectWrapper}>
      <rect
        fill={barColor}
        x={task.x1}
        width={projectWith}
        y={task.y}
        height={task.height}
        rx={task.barCornerRadius}
        ry={task.barCornerRadius}
        className={styles.projectTop}
      />
    </g>
  );
};
