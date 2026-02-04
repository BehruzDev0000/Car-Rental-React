import { useContext } from 'react'
import { Context } from '../../context/Context'
import { Navigation, Pagination } from 'swiper/modules'
import ReviewsItem from './ReviewsItem.jsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ArrowLeft, ArrowRight } from '../../assets/icons'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'; 

const Reviews = () => {
  const { reviewsList = [] } = useContext(Context)

  return (
    <div className="relative w-full h-full">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesOffsetBefore={40}
        slidesOffsetAfter={40}
        navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        }}
        pagination={{
            el: '.custom-pagination-bullets', 
            clickable: true, 
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        }}
        modules={[Navigation, Pagination]} 
        className="reviewSwiper !h-[calc(100%-80px)]"
      >
        {reviewsList.map((card) => (
          <SwiperSlide key={card.id}>
            <ReviewsItem item={card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination-bullets !absolute !top-auto !bottom-[40px] !left-[40px] !w-[546px] z-10 flex items-center rounded-[4px] overflow-hidden">
        
      </div>

      <div className="reviews-navigation absolute bottom-[25px] right-[40px] z-10 flex items-center gap-[16px]">
        <button className="custom-prev w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-100 transition-all disabled:opacity-50">
           <ArrowLeft />
        </button>
        <button className="custom-next w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-100 transition-all disabled:opacity-50">
           <ArrowRight />
        </button>
      </div>

    </div>
  )
}

export default Reviews
