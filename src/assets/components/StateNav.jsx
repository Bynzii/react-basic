
import '../css/State.css'

const Nav = ({categories, setSelectedCategory, onSelectedCategory}) => {
  console.log(setSelectedCategory)

  return (
    <>
      <ul>
        {categories.map((menu,idx) => (
          <li key={idx} onClick={() => onSelectedCategory(menu)}>{menu}</li>
        ))}
      </ul>
    </>
  )

  {/*
    ✅  Nav : 목록 / 클릭하면 선택 바꾸기 / 선택 항목 표시
    - categories : 카테고리 목록
    - setSelectedCategory : 선택된 카테고리
    - onSelectedCatefory : 카테고리 클릭시 실행할 함수  
  */}
}
export default Nav