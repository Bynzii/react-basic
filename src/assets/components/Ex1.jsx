
import { Component } from "react";
import Test from "./ExTest";
import '../css/ClassCom.css'

class Ex1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1, 
      counter: 0,
      value: 0 
    };
    console.log("constructor")
  }

  plus = () => {
    this.setState({
      num: this.state.num+1,
      value: this.state.value+1,
    })
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  render() {
    console.log("render")

    return (
      <div>
        <h3>클래스형 컴포넌트</h3>
        <h3>state: {this.state.num}</h3>
        <button type="button" onClick={this.plus}>증가</button>
        <Test value={this.state.value} />
      </div>
    )
  }

}
export default Ex1