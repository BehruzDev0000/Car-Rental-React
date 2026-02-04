import { PopupIcon } from "../../assets/icons"
import Href from "./href.jsx"
import NavListItem from "./navListItem.jsx"
const NavList = ({item}) => {
  return (
    <nav className="flex items-center">
    {item.map((item)=>(item.childrens.length ?(
        <div key={item.id} className="flex items-center gap-[14px] nav-popup cursor-pointer px-[16px] py-[18px] relative">
            <Href href="/" style={'font-medium text-[18px] text-[#000000]'}>{item.name}</Href>
            <div className="popup-icon"><PopupIcon /></div>
            <div className="absolute top-[50px] left-0 right-0 z-100">
            <NavListItem item={item.childrens}/>
            </div>
        </div>
    ):(<Href href="/" key={item.id} style="font-medium cursor-pointer text-[18px] text-[#000000] px-[16px] py-[18px]">{item.name}</Href>)))}
    </nav>
  )
}

export default NavList