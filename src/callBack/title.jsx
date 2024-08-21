import React, { memo } from "react";
const Title = () => {
  console.log("title rendered");
  return <h1>hello my friend</h1>;
};
export default React.memo(Title);
