const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world react cdn"
);

const parent = React.createElement(
  "div",
  { id: "parent" },

  [
    React.createElement(
      "div",
      { id: "child" },
      [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
      ] //if you want multiple child pass into array
    ),
    React.createElement(
      "div",
      { id: "child2" },
      [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
      ] //if you want multiple child pass into array
    ),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
