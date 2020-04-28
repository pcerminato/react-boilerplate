import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

describe("<App />", () => {
  it("should render", () => {
    const app = renderer.create(<App />);
    const text = "Hello from React-Boilerplate";
    expect(app.toJSON().children[0]).toEqual(text);
  });
});
