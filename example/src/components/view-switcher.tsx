import { ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import React from "react";

type ViewSwitcherProps = {
  onViewModeChange: (viewMode: ViewMode) => void;
  setViewType: (type: "call_type" | "tat") => void;
};

export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  onViewModeChange,
  setViewType,
}) => {
  const handleViewTypeChange = (type: "call_type" | "tat") => {
    setViewType(type);
  };

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
        <button onClick={() => handleViewTypeChange("call_type")}>Type</button>
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
