import React, { useState } from "react";
import Dashboard from "./Dashboard";

const Display = () => {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, SetFoul] = useState(0);
  const [hit, setHit] = useState(0);

  const strikeHandler = () => {
    if (strike < 2 && ball <= 3) {
      setStrike(strike + 1);
    } else {
      setStrike(0);
      setBall(0);
    }
  };

  const ballHandler = () => {
    if (ball < 3 && strike <= 2) {
      setBall(ball + 1);
    } else {
      setBall(0);
      setStrike(0);
    }
  };

  const foulHandler = () => {
    SetFoul(foul + 1);
  };

  const hitHandler = () => {
    setBall(0);
    setStrike(0);
    setHit(hit + 1);
  };

  const resetHandler = () => {
    setBall(0);
    setStrike(0);
    setHit(0);
    SetFoul(0);
  };

  return (
    <>
      <div className="display-container">
        <h1>Strikes: {strike}</h1>
        <h1>Balls: {ball}</h1>
        <h1>Fouls: {foul}</h1>
        <h1>Hits: {hit}</h1>
        <Dashboard
          strikeHandler={strikeHandler}
          ballHandler={ballHandler}
          foulHandler={foulHandler}
          hitHandler={hitHandler}
          resetHandler={resetHandler}
        />
      </div>
    </>
  );
};

export default Display;
