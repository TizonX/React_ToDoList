import React, { useState } from "react";
import ULli from "./ULli";
const Todolist = () => {
  const [current, setUpdate] = useState();
  const [arritem, setArritem] = useState([]);

  const item = (object) => {
    setUpdate(object.target.value);
  };
  const add_item = () => {
    setArritem((arrObj) => {
      return [...arrObj, current];
    });
    setUpdate("");
  };
  // delete function is here (fas fa-times)
  const deleteItem = (id) => {
    setArritem((arrObj) => {
      return arrObj.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="maindiv">
        <div className="centerdiv">
          <h1>List Basket</h1>
          <input
            type="text"
            name="add_item"
            id="add-item"
            placeholder="add new items"
            onChange={item}
          />
          <button onClick={add_item}>+</button>
          <ul>
            {arritem.map((dispObj, index) => {
              return (
                <ULli
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                  text={dispObj}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Todolist;
