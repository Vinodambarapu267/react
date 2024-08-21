import React from "react";
const Button = ({ children, clickhandle }) => {
  console.log(`${children}  rendered`);
  return <button onClick={clickhandle}>{children}</button>;
};

export default React.memo(Button);
