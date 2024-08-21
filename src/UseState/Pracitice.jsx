import React, { useState } from "react";
function State() {
  // this is used for the input states by using the useState Hooks
  const [Firstname, setFirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  let InputChangerhandle = (e, name) => {
    if (name === "Firstname") {
      setFirstname(e.taget.value, name);
    } else if (name === "lastname") {
      setlastname(e.target.value, name);
    }
    if (name === "password") {
      setpassword(e.target.value, name);
    }
  };
  console.log(InputChangerhandle);
  //  this is for button to save in the form
  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = {
      firstname: Firstname,
      lastname: lastname,
      password: password,
    };
    console.log(userData);
  };
  return (
    <div>
      <form style={{ textAlign: "center" }}>
        <h1>LOGIN</h1>
        <div>
          <input
            type="text"
            name="Firstname"
            placeholder="Enter your Firstname "
            onChange={(e) => InputChangerhandle(e, "firstname")}
          />
        </div>
        <div>
          <input
            type="text"
            name="lastname"
            placeholder="Enter your lastname "
            onChange={(e) => InputChangerhandle(e, "lastname")}
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="Enter your password "
            onChange={(e) => InputChangerhandle(e, "password")}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>submit</button>
        </div>
      </form>
    </div>
  );
  // let Submit=(e)=>{
  //     Firstname="firstname",
  //     lastname="lastname",
  //     password="password"
  // }
  // console.log(Submit);
}
export default State;
