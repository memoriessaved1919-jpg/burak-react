// @ts-nocheck
import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  changeColor = () => {
    this.setState({
      color: "blue",
      brant: "Tesla",
      model: "Model S",
      year: 2023,
    });
  };

  componentDidMount() {
    // tug'ilish
    console.log("componentDidMount(");
    // runs after first render - RETRIEVE DATA FROM BACKEND
    // backend’dan ma’lumot olish yani olib kelish
  }

  componentWillUnmount() {
    console.log("componentWillUnmount(");
    // runs before component unmount
    // 	taymerlarni to’xtatish, tozalash
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          Color: {this.state.color} - Model: {this.state.model} from{" "}
          {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change Detail
        </button>
      </div>
    );
  }
}

export default Test;
