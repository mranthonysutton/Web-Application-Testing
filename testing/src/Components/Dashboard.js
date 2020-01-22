import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";

const Dashboard = props => {
  return (
    <div className="dashboard-container">
      <ButtonGroup size="large" color="secondary" fullWidth>
        <Button variant="contained" onClick={props.strikeHandler}>
          Strike
        </Button>
        <Button variant="contained" onClick={props.ballHandler}>
          Ball
        </Button>
        <Button variant="contained" onClick={props.foulHandler}>
          Foul
        </Button>
        <Button variant="contained" onClick={props.hitHandler}>
          Hit
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={props.resetHandler}
        >
          Reset Game
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Dashboard;
