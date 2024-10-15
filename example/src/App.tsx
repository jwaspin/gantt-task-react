import React from "react";
import { Task, ViewMode, Gantt } from "gantt-task-react";
import { ViewSwitcher } from "./components/view-switcher";
import { /* getStartEndDateForProject, */ initTasks } from "./helper";
import "gantt-task-react/dist/index.css";

// Main entry point for the example
const App = () => {
  const [view, setView] = React.useState<ViewMode>(ViewMode.Hour);
  const [tasks /* , setTasks */] = React.useState<Task[]>(initTasks());
  const [viewType, setViewType] = React.useState<"call-type" | "tat">("tat");
  let columnWidth = 65;
  if (view === ViewMode.Year) {
    columnWidth = 350;
  } else if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  // const handleTaskChange = (task: Task) => {
  //   console.log("On date change Id:" + task.id);
  //   let newTasks = tasks.map(t => (t.id === task.id ? task : t));
  //   if (task.project) {
  //     const [start, end] = getStartEndDateForProject(newTasks, task.project);
  //     const project = newTasks[newTasks.findIndex(t => t.id === task.project)];
  //     if (
  //       project.start.getTime() !== start.getTime() ||
  //       project.end.getTime() !== end.getTime()
  //     ) {
  //       const changedProject = { ...project, start, end };
  //       newTasks = newTasks.map(t =>
  //         t.id === task.project ? changedProject : t
  //       );
  //     }
  //   }
  //   setTasks(newTasks);
  // };

  // const handleTaskDelete = (task: Task) => {
  //   const conf = window.confirm("Are you sure about " + task.name + " ?");
  //   if (conf) {
  //     setTasks(tasks.filter(t => t.id !== task.id));
  //   }
  //   return conf;
  // };

  // const handleProgressChange = async (task: Task) => {
  //   setTasks(tasks.map(t => (t.id === task.id ? task : t)));
  //   console.log("On progress change Id:" + task.id);
  // };

  // const handleDblClick = (task: Task) => {
  //   alert("On Double Click event Id:" + task.id);
  // };

  // const handleClick = (task: Task) => {
  //   console.log("On Click event Id:" + task.id);
  // };

  // const handleSelect = (task: Task, isSelected: boolean) => {
  //   console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  // };

  // const handleExpanderClick = (task: Task) => {
  //   setTasks(tasks.map(t => (t.id === task.id ? task : t)));
  //   console.log("On expander click Id:" + task.id);
  // };

  return (
    <div className="Wrapper">
      <h3>Timeline: {viewType === "tat" ? "Turn Around Time" : "Call Type"}</h3>
      <ViewSwitcher
        onViewModeChange={viewMode => setView(viewMode)}
        setViewType={setViewType}
      />
      <Gantt
        tasks={tasks}
        viewType={viewType}
        viewMode={view}
        // onDateChange={handleTaskChange}
        // onDelete={handleTaskDelete}
        // onProgressChange={handleProgressChange}
        // onDoubleClick={handleDblClick}
        // onClick={handleClick}
        // onSelect={handleSelect}
        // onExpanderClick={handleExpanderClick}
        listCellWidth="50px"
        ganttHeight={600}
        columnWidth={columnWidth}
      />
    </div>
  );
};

export default App;
