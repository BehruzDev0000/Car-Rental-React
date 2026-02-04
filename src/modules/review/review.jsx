import { Button, Href } from "../../components/header";
import { GoogleIcon } from "../../assets/icons";
import Reviews from "../../components/review/reviews.jsx";
const Review = () => {
  return (
    <section className="py-[100px] bg-[#F5F5F5]">
      <div className="containers !px-0">
        <div className="w-full flex items-start justify-start rounded-[20px] overflow-hidden">
          <div className="max-w-[470px] !h-[479px] bg-white p-[70px]">
            <Href href="/" style={` !flex items-center gap-[8px]`}>
              <GoogleIcon/>
              <span className="font-medium text-[#4285F4]">From Google</span>
            </Href>
            <h3 className="font-medium text-[38px] mt-[16px] leading-[50px] text-black">
              Hear what the community is saying
            </h3>
            <span
              className="
              block mt-[30px]
              w-full h-[2px]
              rounded-full
              bg-[linear-gradient(90deg,#EA4335_19.83%,#FBBC05_65%,#34A853_82.29%,#4285F4_100%)]"
            ></span>
            <p className="font-medium text-[14px] text-[#555555] mt-[30px]">More interesting reviews on Instagram</p>
           <Button type="button" extraStyle="instagram-btn">Instagram</Button>


          </div>
          <div className="w-[730px] !h-[479px] bg-[#299764] pt-[50px]">
            <Reviews/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
