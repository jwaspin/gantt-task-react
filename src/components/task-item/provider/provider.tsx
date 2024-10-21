import React from "react";
import { TaskItemProps } from "../task-item";
import styles from "./provider.module.css";

export const Provider: React.FC<TaskItemProps> = ({ task, isSelected }) => {
  const barColor = isSelected
    ? task.styles.backgroundSelectedColor
    : task.styles.backgroundColor;

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
        className={styles.providerBackground}
      />
      <rect
        fill={barColor}
        x={task.x1}
        width={providerWith}
        y={task.y}
        height={task.height / 2}
        rx={task.barCornerRadius}
        ry={task.barCornerRadius}
        className={styles.providerTop}
      />
    </g>
  );
};
