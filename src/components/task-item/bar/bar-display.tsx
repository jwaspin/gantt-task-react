import React from "react";
import style from "./bar.module.css";

type BarDisplayProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  barCornerRadius: number;
  styles: {
    backgroundColor: string;
  };
};
export const BarDisplay: React.FC<BarDisplayProps> = ({
  x,
  y,
  width,
  height,
  barCornerRadius,
  styles,
}) => {
  return (
    <g>
      <rect
        x={x}
        width={width}
        y={y}
        height={height}
        ry={barCornerRadius}
        rx={barCornerRadius}
        fill={styles.backgroundColor}
        className={style.barBackground}
      />
    </g>
  );
};
