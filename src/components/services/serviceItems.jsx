import { useContext } from "react"
import { Context } from "../../context/Context"
import ServiceItem from "./serviceItem"

const ServiceItems = () => {
    const {serviceCards} =useContext(Context)
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-[20px] mt-[40px]">
    {serviceCards.map((item)=>(<ServiceItem key={item.id} item={item}/>))}
    </div>
  )
}

export default ServiceItems