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

      <form onSubmit={handleSubmit} className={"m-4"}>
        <div class="form-group m-4">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            onChange={(e) => setusername(e.target.value.toUpperCase())}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group m-4">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary m-4">
          Submit
        </button>
      </form>
      <hr />
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
