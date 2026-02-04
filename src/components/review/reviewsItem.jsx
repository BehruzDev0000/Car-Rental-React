import { FourStars, FiveStars, GoogleTwoIcon, } from "../../assets/icons"
import { Href } from "../header"

const ReviewsItem = ({item}) => {
    const ImageIcon=item.image
    
  return (
   <div className="p-[24px] rounded-[16px] bg-white w-full !h-full">
   <div className="flex flex-col items-start justify-between h-full">
     <div>
        <div className="flex items-center gap-[66px]">
        <div className="flex items-center gap-[12px]">
            <ImageIcon/>
            <div className="flex flex-col items-start justify-start gap-[5px]">
                <h3 className="font-semibold text-[16px]">{item.name}</h3>
                <Href href={`mailto:${item.email}`} style={'text-[14px] text-[#555555]'}>{item.email}</Href>
            </div>
        </div>
        <div className="p-[10px]">
            <GoogleTwoIcon />
        </div>
    </div>
    <div className="mt-[14px]">
        <p className="text-[14px] leading-[20px] text-[#000000]">{item.desc}</p>
    </div>
     </div>
     <div className="w-full">
        <span className="w-full h-[1.5px] bg-[#E5E7EA] mt-[25px] block"></span>
    <div className="mt-[24px] flex items-center gap-[16px]">
        <strong className="text-[#000000] font-medium text-[14px]">Star rating:</strong>
        {item.rating === 5 && <FiveStars />}
        {item.rating === 4.5 && <FourStars />}
    </div>
     </div>
   </div>
    
   </div>
  )
}

export default ReviewsItem
