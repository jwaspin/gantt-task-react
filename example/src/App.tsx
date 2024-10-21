import React from "react";
import { Task, ViewMode, Gantt } from "gantt-task-react";
import { ViewSwitcher } from "./components/view-switcher";
import { /* getStartEndDateForProject, */ initTasks } from "./helper";
import "gantt-task-react/dist/index.css";

// Init
const App = () => {
  const [view, setView] = React.useState<ViewMode>(ViewMode.Hour);
  const [tasks, setTasks] = React.useState<Task[]>(initTasks());
  const [viewType, setViewType] = React.useState<"type" | "tat">("tat");
  let columnWidth = 65;
  if (view === ViewMode.Year) {
    columnWidth = 350;
  } else if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  return (
    <div className="Wrapper">
      <h3>Timeline: {viewType.toUpperCase()}</h3>
      <ViewSwitcher
        onViewModeChange={viewMode => setView(viewMode)}
        viewType={viewType}
        setViewType={setViewType}
      />
      {viewType === "type" ? (
        <Gantt
          tasks={tasks}
          viewMode={view}
          onExpanderClick={handleExpanderClick}
          listCellWidth="50px"
          ganttHeight={100}
          columnWidth={columnWidth}
        />
      ) : (
        <Gantt
          tasks={tasks}
          viewMode={view}
          onExpanderClick={handleExpanderClick}
          listCellWidth="50px"
          ganttHeight={600}
          columnWidth={columnWidth}
        />
      )}
    </div>
  );
};

export default App;
