import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Rect } from "react-konva";
import Konva from "konva";

function MovingRect() {
  let intervalRef = useRef();
  let [xPos, setXPos] = useState(0);
  const [color, setColor] = useState("black");

  function moveX() {
    if (xPos < window.innerWidth - 100) {
      xPos = xPos + 50;
      setXPos(xPos);
    } else {
      xPos = 0;
      setXPos(xPos);
    }
    setColor(Konva.Util.getRandomColor());
  }

  useEffect(() => {
    intervalRef.current = setInterval(moveX, 100);
    return () => clearInterval(intervalRef.current);
  });
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={xPos}
          y={0}
          width={100}
          height={100}
          fill={color}
          shadowBlur={10}
        />
      </Layer>
    </Stage>
  );
}

export default MovingRect;
