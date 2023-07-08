import React from "react";

function List(props) {
  return (
    <div className="bottom">
      {props.arr.map((e, index) => {
        return (
          <div className="out">
            <div className="tag">
              <input
                type="checkbox"
                style={{ transform: "scale(1.5)" }}
                onChange={() => props.onDelete(index)}
              />
              <span></span>
            </div>
            <p>{e}</p>
          </div>
        );
      })}
    </div>
  );
}

export default List;
