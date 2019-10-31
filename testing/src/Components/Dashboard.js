import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";

const Dashboard = props => {
  return (
    <div className="dashboard-container">
      <ButtonGroup size="large" color="secondary" fullWidth>
        <Button variant="contained">Strike</Button>
        <Button variant="contained">Ball</Button>
        <Button variant="contained">Foul</Button>
        <Button variant="contained">Hit</Button>
      </ButtonGroup>
    </div>
  );
};

export default Dashboard;
