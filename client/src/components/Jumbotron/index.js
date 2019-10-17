import React from "react";
import "./style.css";

function Jumbotron({ jumboClass, children }) {
  return (
    <div
      style={{ height: 500, clear: "both", textAlign: "center" }}
      className={jumboClass}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
