import React from "react";
import Subchildcomponent from "./Subchildcomponent";
const Childcomponent = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Child component</h1>
      <Subchildcomponent details={props.details} />
    </div>
  );
};
export default Childcomponent;
