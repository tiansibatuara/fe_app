import React, { Component } from "react";

export default class LifecycleComp extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      nilai: 5,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    document.title = `Nilai ${this.state.nilai}`;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    document.title = `Nilai ${this.state.nilai}`;
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    document.title = `Inixindo`;
  }

  onUpdate = () => {
    this.setState({
      nilai: this.state.nilai + 1,
    });
  };

  render() {
    return (
      <>
        <div>LifecycleComp</div>
        <p>Nilai saat ini adalah : {this.state.nilai}</p>
        <button onClick={this.onUpdate}>Update Nilai</button>
        <button onClick={this.componentWillUnmount}>Hilang</button>
      </>
    );
  }
}
