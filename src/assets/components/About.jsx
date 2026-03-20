

//✅ 기본값
// const About = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h2>이름 : {props.user.name}</h2>
//       <p>나이 : {props.user.age}</p>
//       <p>배열 : {props.array.join(', ')}</p>
//     </div>
//   )
// }

//✅ 객체, 배열 
// const About ({user, array}) => {
//   console.log(user, array)
//   // let {name, age} = user.user;
//   return (
//     <div>
//       <h2>이름 : {user.name}</h2>
//       <p>이름 : {user.age}</p>
//     </div>
//   )
// }

//✅ 함수 전달
// const About = ({onClick}) => {
//   console.log(onClick)
//   return (
//     <>
//       <h2 onClick={onClick}>이름 : </h2>
//       <p>나이 :</p>
//     </>
//   )
// }

//✅ 스프레드 연산
// const About = ({name, age}) => {
  //   console.log(name)
//   return (
  //     <div>
  //       <h2>이름 : {name}</h2>
  //       <p>나이 : {age}</p>
  //     </div>
  //   )
  // }
  
  //✅ defaultProps : 부모(props.jsx)에서 age는 넘겨줌, name은 안넘겨줌
  // const About = ({name="김태완", age}) => {
  //   console.log(name,age)
  //   return(
  //     <>
  //       <h2>이름 : {name}</h2>
  //       <h2>나이 : {age}</h2>
  //     </>
  //   )
  // }

  //✅  list map 렌더링
  const About = ({list}) => {
    console.log(list)
    return (
      <div className="allbox">
        {
          list.map((lists) => (
            <div className="box" key={lists.id}>
              <h2>{lists.name}</h2>
              <p>{lists.role}</p>
            </div>
          ))
        }
      </div>
    )
  }


export default About;
