import React, { useState } from "react";

const UpdateTime = () => {
  // automatically update time
  let Ltime = new Date().toLocaleTimeString();

  const [LtimeU, setLtimeU] = useState(Ltime);

  const Time = () => {
    let Ltime = new Date().toLocaleTimeString();
    setLtimeU(Ltime);
  };
  setInterval(Time, 1000);

  return <h1>{LtimeU}</h1>;
};

export default UpdateTime;
