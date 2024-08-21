import React, { useContext } from "react";
import { UserContext } from "../../REACT/my-app/src/Context/userContext";
const Subchildcomponent = () => {
  const data = useContext(UserContext);
  return (
    <div>
      <h1>Subchild component</h1>
      <div>
        <p>name: {data.firstname}</p>
        <p>surname: {data.lastname}</p>
      </div>
    </div>
  );
};
export default Subchildcomponent;
