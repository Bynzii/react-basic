
// Menu -> Nav -> List -> MenuDe
import Nav from "./StateNav";
import List from "./StateList";
import MenuDe from "./StateDe";
import { useState } from "react";

// img
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'
import img6 from '../img/img6.jpg'
import img7 from '../img/img7.jpg'
import img8 from '../img/img8.jpg'

const Menu = () => {
  let menus = [
    {id:1,name:'조니워커 블루', category:'블렌디드', price:'330,000원',desc:'조니워커 블루 라벨 입니다.' , img: img1},
    {id:2,name:'카발란 포트 솔리스트' , category:'싱글몰트',price:'140,000원',desc:'카발란 포트 솔리스트 입니다.' , img: img2},
    {id:3,name:'글렌피딕 18 vat 4' , category:'싱글몰트',price:'104,000원',desc:'글렌피딕 18 vat 4 입니다.' , img: img3},
    {id:4,name:'카발란 비노 바리끄 솔리스트' , category:'싱글몰트',price:'280,000원',desc:'카발란 비노 바리끄 솔리스트 .' , img: img4},
    {id:5,name:'잭다이니엘 허니' , category:'버번',price:'69,000원',desc:'잭다니엘 허니 입니다.' , img: img5},
    {id:6,name:'발렌타인 30년' , category:'블렌디드',price:'540,000원',desc:'발렌타인 30년 입니다.' , img: img6},
    {id:7,name:'로얄살루트 21년' , category:'블렌디드',price:'240,000원',desc:'로얄 살루트 21년 입니다.' , img: img7},
    {id:8,name:'발렌타인 21년' , category:'블렌디드', price:'210,000원',desc:'발렌타인 21년 입니다.' , img: img8},
    {id:9,name:'카발란 클래식' , category:'싱글몰트', price:'70,000원',desc:'카발란 싱글 몰트 입니다.' , img: img1},
    {id:10,name:'글렌알라키' , category:'싱글몰트', price:'120,000원',desc:'글렌알라키 싱글모트위스키 2012 빈티지 쿠베입니다.' , img: img2},
    {id:11,name:'마오타이' , category:'백주', price:'520,000원',desc:'마오타이 입니다.' , img: img3},
    {id:12,name:'안동소주' , category:'전통주', price:'52,000원',desc:'전통주 안동 소주 입니다.' , img: img4},
  ] 

  // State 선언
  const [state, setState] = useState({category:'전체', w_id:null});

  // 선택한 데이터 가져오기
  const selectW = menus.find((menu) => menu.id === state.w_id);
  // console.log(selectW)

  // 카테고리 필터링 로직 > 삼항연산자로
  const filterMenu = state.category === '전체' ? menus : menus.filter((menu) => menu.category === state.category);
  // console.log(filterMenu)

  // 카테고리 중복 제거 (카테고리 목록 배열)
  const categories = ['전체', ...new Set(menus.map((menu) => menu.category ))];
  // console.log(categories)

  // 상태변경 핸들러 
  const setSelectedCategory = (category) => setState((prev) => ({...prev, category}));
  const setSelectedMenu = (w_id) => setState((prev) => ({...prev,w_id}));

  return (
    <div>
      <h1>위스키 메뉴</h1>
      <div className="nav">
        {!state.w_id && (
          <Nav categories={categories} currentCategory={state.category} onSelectedCategory={setSelectedCategory} />
        )}
      </div>

      <div className="menu__wrap">
        {!state.w_id ? (
          <List menus={filterMenu} onSelectMenu={setSelectedMenu} />
        ) : (
          <MenuDe menu={selectW} onBack={() => setSelectedMenu(null)}/> 
        )
      }
      </div>
    </div>
  )

}

export default Menu

