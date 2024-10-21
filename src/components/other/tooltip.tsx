import React, { useRef, useEffect, useState } from "react";
import { Task } from "../../types/public-types";
import { BarTask } from "../../types/bar-task";
import styles from "./tooltip.module.css";

export type TooltipProps = {
  task: BarTask;
  arrowIndent: number;
  svgContainerHeight: number;
  svgContainerWidth: number;
  svgWidth: number;
  headerHeight: number;
  taskListWidth: number;
  scrollX: number;
  scrollY: number;
  rowHeight: number;
  fontSize: string;
  fontFamily: string;
  TooltipContent: React.FC<{
    task: Task;
    fontSize: string;
    fontFamily: string;
  }>;
};
export const Tooltip: React.FC<TooltipProps> = ({
  task,
  rowHeight,
  svgContainerHeight,
  svgContainerWidth,
  scrollX,
  scrollY,
  arrowIndent,
  fontSize,
  fontFamily,
  headerHeight,
  taskListWidth,
  TooltipContent,
}) => {
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [relatedY, setRelatedY] = useState(0);
  const [relatedX, setRelatedX] = useState(0);
  useEffect(() => {
    if (tooltipRef.current) {
      const tooltipHeight = tooltipRef.current.offsetHeight * 1.1;
      const tooltipWidth = tooltipRef.current.offsetWidth * 1.1;

      let newRelatedY = task.index * rowHeight - scrollY + headerHeight;
      let newRelatedX: number;
      newRelatedX = task.x2 + arrowIndent * 1.5 + taskListWidth - scrollX;
      const tooltipLeftmostPoint = tooltipWidth + newRelatedX;
      const fullChartWidth = taskListWidth + svgContainerWidth;
      if (tooltipLeftmostPoint > fullChartWidth) {
        newRelatedX =
          task.x1 + taskListWidth - arrowIndent * 1.5 - scrollX - tooltipWidth;
      }
      if (newRelatedX < taskListWidth) {
        newRelatedX = svgContainerWidth + taskListWidth - tooltipWidth;
        newRelatedY += rowHeight;
      }

      const tooltipLowerPoint = tooltipHeight + newRelatedY - scrollY;
      if (tooltipLowerPoint > svgContainerHeight - scrollY) {
        newRelatedY = svgContainerHeight - tooltipHeight;
      }
      setRelatedY(newRelatedY);
      setRelatedX(newRelatedX);
    }
  }, [
    tooltipRef,
    task,
    arrowIndent,
    scrollX,
    scrollY,
    headerHeight,
    taskListWidth,
    rowHeight,
    svgContainerHeight,
    svgContainerWidth,
  ]);

  return (
    <div
      ref={tooltipRef}
      className={
        relatedX
          ? styles.tooltipDetailsContainer
          : styles.tooltipDetailsContainerHidden
      }
      style={{ left: relatedX, top: relatedY }}
    >
      <TooltipContent task={task} fontSize={fontSize} fontFamily={fontFamily} />
    </div>
  );
};

export const StandardTooltipContent: React.FC<{
  task: Task;
  fontSize: string;
  fontFamily: string;
}> = ({ task, fontSize, fontFamily }) => {
  const style = {
    fontSize,
    fontFamily,
  };
  return (
    <div className={styles.tooltipDefaultContainer} style={style}>
      <p className={styles.tooltipDefaultContainerParagraph}>
        Total Recordings: {task.name}
      </p>
      <p className={styles.tooltipDefaultContainerParagraph}>Dictation: todo</p>
      <p className={styles.tooltipDefaultContainerParagraph}>Red Team: todo</p>
      <p className={styles.tooltipDefaultContainerParagraph}>
        Live Calls: todo
      </p>
      <p className={styles.tooltipDefaultContainerParagraph}>
        Total Duration: todo
      </p>
      <p className={styles.tooltipDefaultContainerParagraph}>TAT: todo</p>
      <p className={styles.tooltipDefaultContainerParagraph}>Min TAT: todo</p>
      <p className={styles.tooltipDefaultContainerParagraph}>Max TAT: todo</p>
    </div>
  );
};
