
import '../css/State.css'

const Nav = ({categories, currentCategory, onSelectedCategory}) => {
  console.log(currentCategory)

  return (
    <>
      <ul className='navlist'>
        {categories.map((menu,idx) => (
          <li key={idx} onClick={() => onSelectedCategory(menu)} tabIndex={1}>{menu}</li>
        ))}
      </ul>
    </>
  )

  {/*
    ✅  Nav : 목록 / 클릭하면 선택 바꾸기 / 선택 항목 표시
    - categories : 카테고리 목록
    - currentCategory : 선택된 카테고리
    - onSelectedCatefory : 카테고리 클릭시 실행할 함수  
  */}
}
export default Nav