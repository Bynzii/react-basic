

import '../css/State.css'

const MenuDe = ({menu, onBack}) => {
  console.log(menu, onBack)

  return (
    <div>
      <button type="button" onClick={onBack}>뒤로가기</button>

      <div className="detail__wrap">
        <figure>
          <img src={menu.img} alt={menu.name} />
          <h3>{menu.name}</h3>
          <p>{menu.price}</p>
          <span>{menu.text}</span>
        </figure>
      </div>
    </div>
  )
}

export default MenuDe