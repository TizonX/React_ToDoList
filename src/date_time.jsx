import React from "react";

const currDate = new Date();
const currTime = currDate.toLocaleTimeString();
const currD = currDate.toDateString();
const currHour = currDate.getHours();
let greeting = "";
let cssStyle = {};
if (currHour >= 8 && currHour < 12) {
  greeting = "good mornig";
  cssStyle.color = "red";
} else {
  greeting = "good night";
  cssStyle.color = "blue";
}

const DateTime = () => {
  return (
    <>
      <h1 className="heading">hello world</h1>
      <p>
        Current Time: {currTime} <span style={cssStyle}>{greeting}</span>
      </p>
      <p>Current Date: {currD}</p>
    </>
  );
};

export default DateTime;
