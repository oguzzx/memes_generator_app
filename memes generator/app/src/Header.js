import React from "react";
import "./header.css";

function Header(props) {
  return (
    <div>
      <header>
        <p>{props.title}</p>
      </header>
    </div>
  );
}

export default Header;
