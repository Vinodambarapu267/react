import React from "react";
const Count = ({ text, number }) => {
  console.log(`${text} rendered`);
  return (
    <h2>
      {text}:{number}
    </h2>
  );
};
export default React.memo(Count);
