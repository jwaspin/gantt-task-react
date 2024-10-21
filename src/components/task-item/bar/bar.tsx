import React from "react";
import { BarDisplay } from "./bar-display";
import { TaskItemProps } from "../task-item";
import styles from "./bar.module.css";

export const Bar: React.FC<TaskItemProps> = ({
  task,
  onEventStart,
  isSelected,
}) => {
  const isDateChangeable = false;
  return (
    <g className={styles.barWrapper} tabIndex={0}>
      <BarDisplay
        x={task.x1}
        y={task.y}
        width={task.x2 - task.x1}
        height={task.height}
        barCornerRadius={task.barCornerRadius}
        styles={task.styles}
        isSelected={isSelected}
        onMouseDown={(e: React.MouseEvent) => {
          isDateChangeable && onEventStart("move", task, e);
        }}
      />
    </g>
  );
};
