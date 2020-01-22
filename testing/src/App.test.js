import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders useState properly", () => {
  const container = render(<App />);

  container.getByText("Strikes: 0");
  container.getByText("Balls: 0");
  container.getByText("Fouls: 0");
  container.getByText("Hits: 0");

  container.getAllByText("Strike");
  container.getAllByText("Ball");
  container.getAllByText("Foul");
  container.getAllByText("Hit");
  container.getAllByText("Reset Game");
});
