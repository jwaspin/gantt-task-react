import { ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import React from "react";
type ViewSwitcherProps = {
  onViewModeChange: (viewMode: ViewMode) => void;
  viewType: string;
  setViewType: (type: "type" | "tat") => void;
};
export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  onViewModeChange,
  viewType,
  setViewType,
}) => {
  const handleViewTypeChange = (type: "type" | "tat") => {
    setViewType(type);
  };

  console.log(viewType);

  return (
    <div className="ViewContainer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "10px",
        }}
      >
        <input placeholder="Search Providers" />
        <button onClick={() => handleViewTypeChange("type")}>Type</button>
        <button onClick={() => handleViewTypeChange("tat")}>TAT</button>
      </div>
      <div>
        <button
          className="Button"
          onClick={() => onViewModeChange(ViewMode.Hour)}
        >
          Hour
        </button>
        <button
          className="Button"
          onClick={() => onViewModeChange(ViewMode.QuarterDay)}
        >
          Quarter of Day
        </button>
        <button
          className="Button"
          onClick={() => onViewModeChange(ViewMode.HalfDay)}
        >
          Half of Day
        </button>
        <button
          className="Button"
          onClick={() => onViewModeChange(ViewMode.Day)}
        >
          Day
        </button>
        <button
          className="Button"
          onClick={() => onViewModeChange(ViewMode.Week)}
        >
          Week
        </button>
        <button
          className="Button"
          onClick={() => onViewModeChange(ViewMode.Month)}
        >
          Month
        </button>
        <button
          className="Button"
          onClick={() => onViewModeChange(ViewMode.Year)}
        >
          Year
        </button>
      </div>
    </div>
  );
};
