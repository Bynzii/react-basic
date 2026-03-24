
import '../css/State.css'
//
const List = ({menus, onSelectMenu})=> {
  return (
    <>
      {menus.map((menu) => (
        <div className='item__wrap' key={menu.id} onClick={()=>onSelectMenu(menu.id)}>
          <figure>
            <img className='itemImg' src={menu.img} alt={menu.name} />
          </figure>
          <h3>{menu.name}</h3>
          <p>{menu.price}</p>
          <span>{menu.desc}</span>
        </div>
      ))}
    </>
  )

  {/*
    ✅  List : 실제 보여주는 곳 
    - 선택된 카테고이에 맞게 메뉴 걸러내기 
    - 걸러낸 메뉴를 화면에 뿌리기 
  */}

}
export default List