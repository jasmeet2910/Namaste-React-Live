import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="title" key="h1">
    Heading1
  </h1>
);

const Title = () => (
  <h1 id="title" key="h1">
    Heading1
  </h1>
);

// React Component
// functional  - a normal function which returns JSX i.e return some react elements.
// Name of teh componenets should start with capital letters. Not manadatory.Just a convention.

const HeaderComponent = () => {
  return (
    <div>
      {
        heading
        // this heading variable will be replaced with above JSX expression
      }
      <Title />
      {
        // or we can call as
        Title()
      }
      <h1> Namaste React Functional Component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
