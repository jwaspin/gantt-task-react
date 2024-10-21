import React, { useEffect, useRef, useState } from "react";
import { BarTask } from "../../types/bar-task";
import { Bar } from "./bar/bar";
import { BarSmall } from "./bar/bar-small";
import { Milestone } from "./milestone/milestone";
import { Provider } from "./provider/provider";
import style from "./task-list.module.css";

export type TaskItemProps = {
  task: BarTask;
  arrowIndent: number;
  taskHeight: number;
};

export const TaskItem: React.FC<TaskItemProps> = props => {
  const { task, arrowIndent, taskHeight } = {
    ...props,
  };
  const textRef = useRef<SVGTextElement>(null);
  const [taskItem, setTaskItem] = useState<JSX.Element>(<div />);
  const [isTextInside, setIsTextInside] = useState(true);

  useEffect(() => {
    switch (task.typeInternal) {
      case "milestone":
        setTaskItem(<Milestone {...props} />);
        break;
      case "provider":
        setTaskItem(<Provider {...props} />);
        break;
      case "smalltask":
        setTaskItem(<BarSmall {...props} />);
        break;
      default:
        setTaskItem(<Bar {...props} />);
        break;
    }
  }, [task]);

  useEffect(() => {
    if (textRef.current) {
      setIsTextInside(textRef.current.getBBox().width < task.x2 - task.x1);
    }
  }, [textRef, task]);

  const getX = () => {
    const width = task.x2 - task.x1;
    const hasChild = task.barChildren.length > 0;
    if (isTextInside) {
      return task.x1 + width * 0.5;
    }
    return task.x1 + width + arrowIndent * +hasChild + arrowIndent * 0.2;
  };

  return (
    <g
    // onKeyDown={e => {
    //   switch (e.key) {
    //     case "Delete": {
    //       if (isDelete) onEventStart("delete", task, e);
    //       break;
    //     }
    //   }
    //   e.stopPropagation();
    // }}
    // onMouseEnter={e => {
    //   onEventStart("mouseenter", task, e);
    // }}
    // onMouseLeave={e => {
    //   onEventStart("mouseleave", task, e);
    // }}
    // onDoubleClick={e => {
    //   onEventStart("dblclick", task, e);
    // }}
    // onClick={e => {
    //   onEventStart("click", task, e);
    // }}
    // onFocus={() => {
    //   onEventStart("select", task);
    // }}
    >
      {taskItem}
      <text
        x={getX()}
        y={task.y + taskHeight * 0.5}
        className={
          isTextInside
            ? style.barLabel
            : style.barLabel && style.barLabelOutside
        }
        ref={textRef}
      >
        {task.name}
      </text>
    </g>
  );
};
