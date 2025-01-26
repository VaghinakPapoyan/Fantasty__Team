import React from "react";
import "./index.scss";
export default function Loader({ white }) {
  return <div className={white ? "white loader" : "loader"}></div>;
}
