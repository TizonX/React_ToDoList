import React, {useState} from "react";


const HookUseState = () => {


    const [count, setcount] = useState(1) // using use state concept here to increment the values
  // button onclick function
  const Increase = () => 
  {
    setcount(count+1);
  };
  return (
    <>
      <div className="countdiv">
        <h1>{count}</h1>
        <button className="countbtn" onClick={Increase}>
          click to update
        </button>
      </div>
    </>
  );
};

export default HookUseState;
