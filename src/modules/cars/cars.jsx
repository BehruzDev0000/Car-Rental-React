import  Button  from "../../components/header/button"
import { useContext } from "react"
import { Context } from "../../context/Context"
import { AllCars, Categories } from "../../components/cars/index"


const Cars=()=>{
    const {setActiveCategoryId}=useContext(Context)
    return (
        <section className="mt-[20px] pb-[160px]">
            <div className="containers !px-0">
                <div className="mx-auto text-center max-w-[575px]">
                    <h2 className="font-semibold text-[#000000] text-[36px]">
                        Choose the car of your dreams
                    </h2>
                    <p className="mt-[10px] text-[#555555] text-[16px] leading-[24px]">We provide our customers with the most incredible driving emotions. That is why there are only world-class cars in our fleet</p>
                </div>
                <div className="mx-auto w-[476px] mt-[40px]">
                    <Categories/>
                </div>
                <AllCars/>
                <div className="mt-[40px] text-center">
                    <Button type="button" onClick={()=>setActiveCategoryId(0)} extraStyle="!px-[30px] py-[18px] text-[18px] bg-[#299764] text-white">View all cars</Button>
                </div>
            </div>
        </section>
    )
}
export default Cars
