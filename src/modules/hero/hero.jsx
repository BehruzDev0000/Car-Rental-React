import { Button } from "../../components/header"
import Cards from "../../components/hero/cards"
import { SearchIcon } from "../../assets/icons"

const Hero = () => {
  return (
    <section className="mt-[20px] relative mb-[133px]">
        <div className="containers !px-0">
            <Cards/>
        </div>
        <div className="absolute bottom-[-33px] left-0 right-0 h-[66px] rounded-[100px] shadow-[0px_4px_10px_0px_#00000026]
 bg-white z-5 max-w-[600px] mx-auto flex items-center justify-between pl-[30px] pr-[4px]">
           <input type="text" placeholder="Find the car of your dreams" className="placeholder:text-[#555555] placeholder:text-[18px] w-[90%] outline-none py-[22px] "/>
            <Button type="button" extraStyle="!p-[17px] bg-[#299764]"><SearchIcon/></Button>
 </div>
    </section>
  )
}

export default Hero