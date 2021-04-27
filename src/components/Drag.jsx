import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Time = styled.h1`
  color: palevioletred;
  position: absolute;
  font-size: 1.7em;
  bottom: 50px;
  left: 50px;
  outline-style: solid;
  // background-color: black;
  font-family: serif;
`;

const End = styled.h1`
  color: palevioletred;
  position: absolute;
  font-size: 1.7em;
  bottom: 50px;
  right: 50px;
  outline-style: solid;
  // background-color: black;
  font-family: serif;
`;

const Wrapper = styled.section`
  padding: 30em;
  background: papayawhip;
`;

function Drag() {
  let intervalRef = useRef();

  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [currentMinutes, setCurrentMinutes] = useState(new Date().getMinutes());
  const [currentSeconds, setCurrentSeconds] = useState(new Date().getSeconds());

  const updateTime = () => {
    setCurrentHour(new Date().getHours());
    setCurrentMinutes(new Date().getMinutes());
    setCurrentSeconds(new Date().getSeconds());
  };

  useEffect(() => {
    intervalRef.current = setInterval(updateTime, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <Wrapper>
      <Time>
        <p>
          {currentHour}:{currentMinutes}:{currentSeconds}
        </p>
      </Time>
      <End>
        <p>23</p>
      </End>
    </Wrapper>
  );
}

export default Drag;

// import Draggable from "react-draggable";

// const handleStart = () => {
//   console.log("Has Started Dragging!!!");
// };
// const handleDrag = (e) => {
//   console.log("Is being hold");
// };
// const handleStop = () => {
//   console.log("Done!");
// };

/* <Draggable
        axis="x"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <div>
          <Title>
            <h1>Hello there!</h1>
          </Title>
        </div>
      </Draggable> */
