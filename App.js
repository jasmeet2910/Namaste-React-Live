// =========================================================================================
//     const heading = React.createElement(
//         "h1",
//          {
//         id:"title",
//     },
//      "Display Heading using react")
//     console.log(heading);
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     const root1 = ReactDOM.createRoot(document.getElementById("footer"));
//     const root2 = ReactDOM.createRoot(document.getElementById("header"));
//     root.render(heading); // render function modifies our dom. so basically we are injecting h1 element to our dom where div id is root.
//   root1.render(heading)
//   root2.render(heading)

//   // we can have multiple render and one root but in genrall we laways have one root and one render.

// ======================================================================================
// lets create complex html structire using react

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const heading1 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  heading,
  heading1
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
