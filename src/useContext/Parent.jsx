import React, { useState } from "react";
import Childcomponent from "./ChildComponent";
const Final = () => {
  const [details, setdetails] = useState({
    firstname: "vinod",
    lastname: "ambarapu",
  });
  return (
    <div>
      <h1>Parentcomponent</h1>
      <Childcomponent details={details} />
    </div>
  );
};
export default Final;
