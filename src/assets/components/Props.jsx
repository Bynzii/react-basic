import About from "./About";

function Props() {
  let user = {name:'변지은', age:100}
  let array = [1,2,3,4,5]
  let handleClick = () => {alert("click!!")}  

  let list = [
    {id: 1, name:'변', role:'개발자' },
    {id: 2, name:'지', role:'디자이너' },
    {id: 3, name:'은', role:'퍼블리셔 ' },
    {id: 4, name:'변지', role:'기획자' },
    {id: 5, name:'변지은', role:'총무' },
  ]

  return (
    <>
      {/* ✅기본값 전달 : 선언없이 직접전달 */}
      {/* <About name="변지은" age={20}></About> */}


      {/* ✅객체,배열 전달 : 변수 선언 후 전달 */}
      {/* <About user={user} array={array}></About> */}


      {/* ✅함수(이벤트 핸들러) 전달  */}
      {/* <About onClick={handleClick} /> */}

      {/* ✅스프레드 연산 : 여러개의 props 한번에 전달 */}
      {/* <About {...user} /> */}


      {/* ✅defaultProps : props 전달 안됬을때 쓸 기본값 설정 */}
      {/* <About age={80}/> */}


      {/* ✅list map 렌더링 : 배열을 map으로 순회해서 여러개의 컴포넌트를 렌더링 
          -> 배열 데이터를 자식 컴포넌트에 넘겨서 반복 출력할때 사용
          -> key 값은 반드시 고유한 값이여야 함 (주로 id사용)     
      */}
      <About list={list}/>
    </>
  )
}
export default Props