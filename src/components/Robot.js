import { animated } from "react-spring";
import "./robot.css";
import { useAnimation } from "./animation";
import { useEffect, useRef, useState } from "react";
import sound from "./sound.wav";

const audio = new Audio(sound);

export const Robot = ({ name }) => {
  const [angry, setAngry] = useState(false);
  const [mount, setMount] = useState(false);
  const [value, setValue] = useState("");

  const myRobotDiv = useRef();

  // КОД АНИМАЦИИ
  const { stylesLeft, stylesRight, stylesHead, stylesAntenna, stylesTors } =
    useAnimation();
  // ------------

  //class?????
  //componentDidMount
  //componentDidUpdate
  //componentWillUnmount

  //function

  useEffect(() => {
    console.log("DILNAZ");
  }, [value, name]);

  useEffect(() => {
    audio.play();
    console.log("AMIR");
    return () => {
      console.log("MADIYAR");
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (mount) {
      console.log("ASSEM");
    }
    setMount(true);
  }, [angry, name]);

  useEffect(() => {
    console.log("ANDREY");
  });

  return (
    <div className="root" ref={myRobotDiv}>
      <div className="robot">
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <animated.div style={stylesAntenna} className="antenna"></animated.div>
        <animated.div style={stylesHead} className="head">
          <div
            className="eye"
            style={{ background: angry ? "red" : "white" }}
          />
          <div
            className="eye"
            style={{ background: angry ? "red" : "white" }}
          />
        </animated.div>
        <animated.div style={stylesTors} className="torso">
          <div className={"robot-name"}>
            {name}
            <div className="switch" onClick={() => setAngry(!angry)}>
              <span
                className="slider round"
                style={{
                  background: angry ? "#2196F3" : "",
                }}
              ></span>
              <span
                className="rounded"
                style={{
                  transform: angry ? "translateX(26px)" : "",
                }}
              />
            </div>
          </div>

          <animated.div style={stylesLeft} className="left">
            j
          </animated.div>
          <animated.div style={stylesRight} className="right">
            j
          </animated.div>
        </animated.div>
      </div>
    </div>
  );
};
