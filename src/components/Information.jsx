import React from "react";
import { description } from "../data";
const Information = () => {
  return (
    <>
      {description.map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
    </>
  );
};

export default Information;
