import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        color: "red",
        fontSize: "18",
      }}
    >
      <div>Oops Something went wrong!!!!!</div>
      <div className="err">{err.data}</div>
    </div>
  );
};

export default Error;
