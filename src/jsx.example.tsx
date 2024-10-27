import React, { createElement as e, useState } from "react";

function App() {
  // return <h1>Hallo Welt</h1>;
  // return React.createElement("h1", {}, "Hallo von JS");
  const [count, setCount] = useState(0);

  return e("div", { className: "container" }, [
    e("h1", { className: "font-bald", key: 1 }, `Test JSX ${count}`),
    e(
      "button",
      {
        className: "py-2 px-4 border",
        key: 2,
        onClick: () => setCount(count + 1),
      },
      "Click me"
    ),
  ]);
}
