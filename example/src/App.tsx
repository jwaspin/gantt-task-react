import React from "react";
import { Task, ViewMode, Gantt } from "gantt-task-react";
import { ViewSwitcher } from "./components/view-switcher";
import { initTasks } from "./helper";
import "gantt-task-react/dist/index.css";

// Main entry point for the example
const App = () => {
  const [view, setView] = React.useState<ViewMode>(ViewMode.Hour);
  const [viewType, setViewType] = React.useState<"call-type" | "tat">("tat");
  const tasks: Task[] = initTasks();

  let columnWidth = 65;
  if (view === ViewMode.Year) {
    columnWidth = 350;
  } else if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

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
        listCellWidth="50px"
        ganttHeight={600}
        columnWidth={columnWidth}
      />
    </div>
  );
};

export default App;
