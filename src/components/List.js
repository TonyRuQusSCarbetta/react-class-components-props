import React, { Component } from "react";

// extends component means we are copying what react built in as component default method
export class MyText extends Component {
  render() {
    return (<div>
      <h1>
        Component</h1>
      <p>This class component is named MyText. I can re-use it's code by simply Rendering (fancy name for calling) it by it's class name and I won't have to re type it, however many times I will need it.</p>
    </div>);
  };
}

export class GreetName extends Component {
  render() {
    return (
      <div>
       <h2>Hello, {this.props.name}</h2>
       </div>
    );
  };
}
