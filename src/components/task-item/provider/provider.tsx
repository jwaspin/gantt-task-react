import React from "react";
import { TaskItemProps } from "../task-item";
import styles from "./provider.module.css";

const greenBarColor = "#27a38a";
const yellowBarColor = "#d1a215";
const redBarColor = "#bf0808";
const barBackgroundColor = "#b8c2cc";

const good_tat_threshold = 1.5;
const warning_tat_threshold = 2.0;

const getBarColor = (task: TaskItemProps["task"]) => {
  if (task.tat_avg) {
    if (task.tat_avg < good_tat_threshold) {
      return greenBarColor;
    } else if (task.tat_avg < warning_tat_threshold) {
      return yellowBarColor;
    }
    return redBarColor;
  }
  return barBackgroundColor;
};

export const Provider: React.FC<TaskItemProps> = ({
  task /* , isSelected */,
}) => {
  const barColor = getBarColor(task);

  const providerWith = task.x2 - task.x1;

  return (
    <g tabIndex={0} className={styles.providerWrapper}>
      <rect
        fill={barColor}
        x={task.x1}
        width={providerWith}
        y={task.y}
        height={task.height}
        rx={task.barCornerRadius}
        ry={task.barCornerRadius}
        className={styles.providerTop}
      />
    </g>
  );
};
