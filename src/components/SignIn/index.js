import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
//npm i prop-types //Proptype check

const SignIn = () => {
  //states
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [navigateUser, setnavigateUser] = useState(false);
  //utils
  const user = { name: "tushar", pass: "1234" };

  //functions
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, pass } = user;
    if (username.toLowerCase() === name && password === pass) {
      setnavigateUser(true);
    }
  };

  return (
    <>
      {navigateUser && <Redirect to="/products" />}
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value.toUpperCase())}
        />
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <input type="submit" />
      </form>
      <hr />
      <Child />
    </>
  );
};

export default SignIn;

const Child = ({ user }) => {
  return (
    <>
      <h1>Child</h1>
      <h1>{user.name}</h1>
      <h1>{user.pass}</h1>
    </>
  );
};

Child.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    pass: PropTypes.any.isRequired,
  }),
};

Child.defaultProps = {
  user: {
    name: "Hello",
    pass: "Hello",
  },
};
const Four = (props) => <h1>{props.name}</h1>;

const App = () => {
  const [name, setname] = useState("hello");
  return (
    <>
      <One name={name} handleName={(data) => setname(data)} />
      <Four name={name} />
    </>
  );
};

const One = (props) => <Two name={props.name} handleName={props.handleName} />;

const Two = (props) => (
  <Three name={props.name} handleName={props.handleName} />
);

const Three = (props) => (
  <>
    <h1>name={props.name}</h1>
    <input onChange={(e) => props.handleName(e.target.value)} />
  </>
);
