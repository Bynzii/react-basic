
import { Component } from "react";

class Test extends Component{
  render() {
    return (
      <div>
        <h3>test</h3>
        <h3>value: {this.props.value}</h3>
      </div>
    )
  }
}

export default Test
