import React from "react";
import { useState, useEffect } from "react";
import "./Timer.css";
export default function Timer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "May, 31, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="timer">
        <div className="d-flex">
          <div className="me-2 ">
            {" "}
            <p className="for-character mb-0">
              Days <br />
            </p>{" "}
            <div className="for-num">{days} </div>
          </div>{" "}
          <div className="mx-2 mt-3 text-danger fw-bolder fs-4"> :</div>
          <div className="me-2">
            {" "}
            <p className="for-character mb-0">
              Hours <br />
            </p>{" "}
            <div className="for-num">{hours}</div>
          </div>
          <div className="mx-2 mt-3 text-danger fw-bolder fs-4"> :</div>
          <div className="me-2">
            {" "}
            <p className="for-character mb-0">
              Minutes <br />
            </p>{" "}
            <div className="for-num">{minutes}</div>
          </div>
          <div className="mx-2 mt-3 text-danger fw-bolder fs-4"> :</div>
          <div className="me-2">
            {" "}
            <p className="for-character mb-0">
              Seconds <br />
            </p>{" "}
            <div className="for-num">{seconds}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
