

const Box = (props) => {
  let result;

  if (props.name === "컴퓨터" &&
      props.result !== "무승부!!" && 
      props.result !== "") {
        result = props.result === "승" ? "패" : "승"
      } else {
        result = props.result
      }
      console.log(props)

    return (
      <div className={`gameBox ${result}`}>
        <h1>{props.name}</h1>
        <h2>{props.item && props.item.name}</h2>
        <span>{props.item && props.item.icon}</span>
        <h3>결과 : {result}</h3>
      </div>
    )
}

export default Box