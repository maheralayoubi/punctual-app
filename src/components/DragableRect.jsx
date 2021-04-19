import React, { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";

function DragableRect() {
  const [pos, setPos] = useState({
    isDragging: false,
    x: 50,
    y: 50,
  });

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={pos.x}
          y={pos.y}
          width={100}
          height={100}
          draggable
          fill={pos.isDragging ? "green" : "black"}
          shadowBlur={10}
          onDragStart={() => {
            setPos({
              isDragging: true,
            });
          }}
          onDragEnd={(e) => {
            setPos({
              isDragging: false,
              x: e.target.x(),
              y: e.target.y(),
            });
          }}
        />
      </Layer>
    </Stage>
  );
}

export default DragableRect;
