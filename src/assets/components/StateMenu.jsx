
// Menu -> Nav -> List -> MenuDe
import Nav from "./StateNav";
import List from "./StateList";
import MenuDe from "./StateDe";
import { useState } from "react";

const Menu = () => {
  let menus = [
    {id:1,name:'조니워커 블루', category:'블렌디드', price:'330,000원',desc:'조니워커 블루 라벨 입니다.' , img:'../assets/css/img1.jpg'},
    {id:2,name:'카발란 포트 솔리스트' , category:'싱글몰트',price:'140,000원',desc:'카발란 포트 솔리스트 입니다.' , img:'../assets/css/img2.jpg'},
    {id:3,name:'글렌피딕 18 vat 4' , category:'싱글몰트',price:'104,000원',desc:'글렌피딕 18 vat 4 입니다.' , img:'../assets/css/img3.jpg'},
    {id:4,name:'카발란 비노 바리끄 솔리스트' , category:'싱글몰트',price:'280,000원',desc:'카발란 비노 바리끄 솔리스트 .' , img:'../assets/css/img4.jpg'},
    {id:5,name:'잭다이니엘 허니' , category:'버번',price:'69,000원',desc:'잭다니엘 허니 입니다.' , img:'../assets/css/img5.jpg'},
    {id:6,name:'발렌타인 30년' , category:'블렌디드',price:'540,000원',desc:'발렌타인 30년 입니다.' , img:'../assets/css/img6.jpg'},
    {id:7,name:'로얄살루트 21년' , category:'블렌디드',price:'240,000원',desc:'로얄 살루트 21년 입니다.' , img:'../assets/css/img7.jpg'},
    {id:8,name:'발렌타인 21년' , category:'블렌디드', price:'210,000원',desc:'발렌타인 21년 입니다.' , img:'../assets/css/img8.jpg'},
    {id:9,name:'카발란 클래식' , category:'싱글몰트', price:'70,000원',desc:'카발란 싱글 몰트 입니다.' , img:'../assets/css/img9.jpg'},
    {id:10,name:'글렌알라키' , category:'싱글몰트', price:'120,000원',desc:'글렌알라키 싱글모트위스키 2012 빈티지 쿠베입니다.' , img:'../assets/css/img1.jpg'},
    {id:11,name:'마오타이' , category:'백주', price:'520,000원',desc:'마오타이 입니다.' , img:'../assets/css/img2.jpg'},
    {id:12,name:'안동소주' , category:'전통주', price:'52,000원',desc:'전통주 안동 소주 입니다.' , img:'../assets/css/img3.jpg'},
  ] 

  const [state, setState] = useState({category:'전체', w_id:null});

  const selectW = menus.find((menu) => menu.id === state.w_id);
  console.log(selectW)
}

export default Menu