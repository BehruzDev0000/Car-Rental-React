import Href from "./href"

const NavListItem = ({ item }) => {
  return (
   <div className="flex popup-menu opacity-0 flex-col justify-center p-[10px] rounded-[20px] shadow-[0px_4px_10px_0px_#00000026] bg-slate-100">
   {
    item.map((item)=>(<Href key={item.id} href="/" style={`hover:bg-white cursor-pointer rounded-[20px] py-[16px] pl-[18px] font-medium text-[18px] text-[#000000]`}>{item.name}</Href>))
   }
   </div>
  )
}

export default NavListItem