import axios from "axios";
import React, { Component, Fragment, PureComponent } from "react";
class PlacesGrid extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      child: true,
      count: 0,
      tree: [{ a: 1, b: [1, 2, 3] }],
      todos: [],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: 123 });
    }, 1000);

    axios.get("https://jsonplaceholder.typicode.com/todos/").then((res) => {
      this.setState({ todos: res.data });
    });
    axios({
      method: "get", // post
      url: "https://jsonplaceholder.typicode.com/todos/",
      data: {
        name: "Aakash",
      },
      params: {
        id: 123,
      },
      header: {},
    })
      .then((res) => console.log(res))
      .catch((err) => console.log("Error", err));
  }
  //deep JSON.parse

  render() {
    console.log("Render Called");
    const { todos } = this.state;
    return (
      <>
        {this.state.count}
        <button onClick={() => this.setState({ child: !this.state.child })}>
          Show/Hide
        </button>
        {todos.length && todos.map((item) => <h1>{item.title}</h1>)}
        {this.state.child ? <Child /> : ""}
      </>
    );
  }
}

export default PlacesGrid;

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.localStorage.setItem("name", "Aakash");
  }
  componentWillUnmount() {
    console.log("Child Dies");
    window.localStorage.removeItem("name");
  }
  render() {
    return <h1>Child Component</h1>;
  }
}
