import React from "react";
import { TaskItemProps } from "../task-item";
import styles from "./project.module.css";

const getTatColor = (task: TaskItemProps["task"]) => {
  const { tat_avg } = { ...task };
  if (tat_avg < 1.5) {
    return task.styles.greenColor;
  }
  if (tat_avg < 2.0) {
    return task.styles.yellowColor;
  }
  return task.styles.redColor;
};

export const Project: React.FC<TaskItemProps> = ({ task }) => {
  const barColor = getTatColor(task);
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
