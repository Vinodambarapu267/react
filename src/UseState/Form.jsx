import React, { useState } from "react";

function Form() {
  const [firstname, setfirstname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const Changefirstname=(e)=>{
  //     setfirstname(e.taget);
  // }
  // const changeemail=(e)=>{
  //     setemail(e.taget)
  // }
  // const changepassword=(e)=>{
  //     setpassword(e.taget)
  // }
  let InputChangerhandle = (e, name) => {
    console.log(e.target.value, name);
    if (name === "firstname") {
      setfirstname(e.target.value);
    } else if (name === "email") {
      setemail(e.target.value);
    }
    if (name === "password") {
      setpassword(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = {
      firstname: firstname,
      email: email,
      password: password,
    };
    console.log(userData);
  };
  return (
    <center>
      <form onSubmit={handleSubmit}>
        <h1>SIGNUP</h1>
        <div>
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={(e) => InputChangerhandle(e, "firstname")}
            placeholder="Enter your name "
          />
        </div>
        ,<br />
        <div>
          <input
            type="eamil"
            name="email"
            id="email"
            onChange={(e) => InputChangerhandle(e, "email")}
            placeholder="enter your email"
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => InputChangerhandle(e, "password")}
            placeholder="enter your password"
          />
        </div>
        <br />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </center>
  );
}
export default Form;
