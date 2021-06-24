import React, { useState } from "react";

const Footer = () => {
  const [name, updateName] = useState("Sachin");
  const [age, setAge] = useState(123);
  return (
    <>
      <h1>
        {name} - {age}
      </h1>
      <button onClick={() => updateName("Aakash")}>Click</button>
      <button onClick={() => setAge(22)}>Update Age</button>
      <hr />
      <Child name={name} />
    </>
  );
};

export default Footer;

const Child = (props) => {
  return <h1>{props.name}</h1>;
};
