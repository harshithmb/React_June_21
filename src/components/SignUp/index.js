import React, { Component, createRef } from "react";
import { connect } from "react-redux";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.firstName = createRef();
    this.lastName = createRef();
    this.age = createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.firstName.current.value, this.firstName);
  };

  render() {
    console.log("this.props.prods", this.props.prods);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>First Name</label>
        <input type="text" ref={this.firstName} />
        <label>Last Name</label>
        <input type="text" ref={this.lastName} />
        <label>Age</label>
        <input type="number" ref={this.age} />
        <input type="submit" />
      </form>
    );
  }
}

const mapStateToProps = (store) => ({
  prods: store.products,
});

export default connect(mapStateToProps, null)(SignUp);
