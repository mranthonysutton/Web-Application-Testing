import React, { useState } from "react";
import Dashboard from "./Dashboard";

const Display = () => {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, SetFoul] = useState(0);
  const [hit, setHit] = useState(0);

  const strikeHandler = () => {
    setStrike(strike + 1);
  };

  const ballHandler = () => {
    setBall(ball + 1);
  };

  const foulHandler = () => {
    SetFoul(foul + 1);
  };

  const hitHandler = () => {
    setHit(hit + 1);
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
        />
      </div>
    </>
  );
};

export default Display;
