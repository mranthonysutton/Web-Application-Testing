import React, { useState } from "react";
import Dashboard from "./Dashboard";

const Display = () => {
  const [strike, useStrike] = useState(0);
  const [ball, useBall] = useState(0);
  const [foul, useFoul] = useState(0);
  const [hit, useHit] = useState(0);

  return (
    <>
      <h1>From Display</h1>
      <Dashboard />
    </>
  );
};

export default Display;
