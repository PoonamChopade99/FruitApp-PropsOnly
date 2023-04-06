import React from "react";
import "./Fruits.css";
const Fruits = (props) => {
    console.log(props)
  return (
    <>
      <div className="card-container">
        <h2>{props.title}</h2>
        <img
          src={props.imglink}
          alt={props.altname}
        />
        <p>
          {props.desc}
        </p>
        <button>{props.btn}</button>
        <hr />
      </div>
    </>
  );
};
export default Fruits;