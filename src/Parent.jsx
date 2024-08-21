import React, { useCallback, useState } from "react";
import Button from "./callBack/Button";
import Title from "./callBack/title";
import Count from "./callBack/Count";
function Final() {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(10000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text={"age"} number={age} />
      <Button clickhandle={incrementAge}>increment Age</Button>
      <Count text={"salary"} number={salary} />
      <Button clickhandle={incrementSalary}>increment Salary</Button>
    </div>
  );
}

export default Final;
