import React from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Auxiliary";
import BackDrop from "../BackDrop/BackDrop";
const Modal = props => {
  return (
    <Aux>
      <BackDrop onBackDropClick={props.onBackDropClick} show={props.show} />
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
        className={classes.Modal}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Modal;
