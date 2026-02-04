import { useContext } from "react"
import { Context } from "../../context/Context"
import FooterItems from "./footerItems"

const FooterCards = () => {
    const {FooterBottomList,FooterTopList}=useContext(Context)
  return (
    <div className="w-full">
        <div className="flex items-start justify-between max-w-[814px]">
            {FooterTopList.map((item)=>(
                <FooterItems key={item.id} item={item} />
            ))}
        </div>
        <span className="w-full h-0.5 bg-gray-200 block mt-[40px]"></span>
        <div className="flex items-start justify-between mt-[40px] max-w-[612px]">
            {FooterBottomList.map((item)=>(
                <FooterItems key={item.id} item={item} />
            ))}
        </div>
    </div>
  )
}

export default FooterCards