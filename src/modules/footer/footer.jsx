import { SiteLogo } from "../../assets/icons"
import FooterCards from "../../components/footer/footerCards"

const Footer = () => {
  return (
    <section className="bt-[#E5E7EA] bt-[1.5px] py-[40px]">
        <div className="containers !px-0">
            <div className="flex items-start justify-start gap-[65px]">
                <div className="max-w-[240px] flex flex-col gap-[84px]">
                    <div>
                        <SiteLogo/>
                        <p className="text-[12px] leading-[20px] text-[#555555] mt-[20px]">Car rental offers a wide range of cars available for rent in Newark EWR Airport NJ. We pride ourselves in our customer service, and hassle-free renting experience.</p>
                    </div>
                <div className="w-[158px]">
                    <strong className="font-medium text-[16px] leading-[24px] ">
                        © 2022 Car rental Terms & Conditions
                    </strong>
                </div>
                </div>
                <FooterCards/>
            </div>
        </div>
    </section>
  )
}

export default Footer