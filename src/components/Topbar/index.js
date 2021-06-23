import React, { Component, PureComponent } from "react";
import { convertToUpper as toUpper, mockData } from "../../utils/constants";
import styles from "./Topbar.module.css";

class Parent extends Component {
  //ccc
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      loader: true,
      products: [],
    };
    console.log("First Call Constructor Parent");
  }

  updateCountMethod(number) {
    this.setState({ count: number });
  }
  componentDidMount() {
    console.log("third Call componentDidMount Parent");
    fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => res.json())
      .then((res) => {
        // this.setState({
        //   products: res, // new products
        //   loader: false,
        // });
      });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if (nextState.products.length !== this.state.products.length) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {
    console.log("API request in UPDATE Phase");
  }
  render() {
    console.log("Second Call Render Parent", React.version);
    const { loader, products } = this.state;
    return (
      <div>
        {loader ? (
          <h1>Loading...</h1>
        ) : (
          products.length &&
          products.map(({ name, preview }) => (
            <div>
              <img src={preview} width={200} />
              <h1
                onClick={() => {
                  console.log(name);
                }}
              >
                {name}
              </h1>
            </div>
          ))
        )}
        {/* 
        <Child
          count={this.state.count}
          updateCount={(num) => this.updateCountMethod(num)}
        /> */}
      </div>
    );
  }
}

//export default Parent;

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Child" };
    console.log("First Call Constructor Child");
  }
  componentDidMount() {
    this.setState({ name: "Child_CHANGE" });
    console.log("third Call componentDidMount Child");
  }
  render() {
    console.log("Second Call Render Child");
    return (
      <div>
        <h1>
          {this.state.name} - {this.props.count}
        </h1>
        <button onClick={() => this.props.updateCount(123)}>
          Click to Increment
        </button>
      </div>
    );
  }
}

// class TopBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: this.props.username, // Sachin
//       age: 10,
//       count: 0,
//     };
//     console.log("Constructor First Call");
//   }
//   updateData = () => {
//     this.setState({ name: "Anil" });
//     this.setState({ name: "Gitnash" });
//     this.setState({ name: "Tushar", age: 123 });
//   };

//   render() {
//     console.log("Second Call");
//     const { count } = this.state;
//     return (
//       <div>
//         <h1 className={styles.heading}>Count - {count}</h1>

//         <button
//           onClick={() =>
//             this.setState({
//               count:
//                 this.state.count <= 10 ? ++this.state.count : this.state.count,
//             })
//           }
//         >
//           +
//         </button>
//         <button
//           onClick={() =>
//             this.setState({
//               count:
//                 this.state.count <= 0 ? this.state.count : --this.state.count,
//             })
//           }
//         >
//           -
//         </button>
//         <h5>{this.props.username}</h5>
//         <button onClick={this.updateData}>Click</button>
//       </div>
//     );
//   }
// }

// // const TopBar = (props) => {
// //   return (
// //     <div>
// //       <h1 className={styles.heading}> {toUpper(props.name)}</h1>
// //     </div>
// //   );
// // };

// export default TopBar;

class Parent_1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      cart: [],
      products: ["Sachin", "Yash", "X"],
    };
  } // compoenentDidMount //First render
  //componentDidUpdate //  3rd Call Update Phase

  //shouldComponentUpdate 1st call Update Phase

  // 5 +
  // 0 -
  shouldComponentUpdate(nextProps, nextState) {}
  handleCount() {
    return [];
  }
  render() {
    // 2nd Call Update
    return (
      <div>
        {this.state.count}
        <button>-</button>
        <button>+</button>
        <input
          onChange={(e) => this.setState({ searchValue: e.target.value })}
        />
        <button onClick={() => {}}>Submit</button>
        <Navbar cartProp={this.state.cart} />
        <Products
          products={this.state.products}
          addToCart={(data) =>
            this.setState({ cart: [...this.state.cart, data] })
          } // this.forceUpdate({cart: ""}) bypass shouldComponentUpdate
        />
      </div>
    );
  }
}
export default Parent_1;

class Navbar extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.cartProp > 1) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    return <div>Cart {this.props.cartProp.length}</div>;
  }
}
class Products extends Component {
  state = { name: "A" };
  render() {
    return (
      <div>
        {this.props.products.map((item) => (
          <Product item={item} addToCart={this.props.addToCart} />
        ))}
      </div>
    );
  }
}

const Product = ({ addToCart, item }) => {
  return <h1 onClick={() => addToCart(item)}>{item}</h1>;
};
