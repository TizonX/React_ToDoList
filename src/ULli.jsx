import React from "react";

const ULli = (props) => {
    return(
        <>
  <li>
    <i
      className="fa fa-times"
      aria-hidden="true"
      onClick={() => {
        props.onSelect(props.id);
      }}
    />

    {props.text}
  </li>
  </>
    );
};
export default ULli;
