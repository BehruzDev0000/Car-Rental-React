import { Swiper, SwiperSlide } from 'swiper/react'
import CardItem from './cardItem'
import { useContext } from 'react'
import { Context } from '../../context/Context.jsx'
import { Navigation, Pagination } from 'swiper/modules'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';
const Cards = () => {
    const { cards = [] } = useContext(Context)
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="heroSwiper relative"
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <CardItem item={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Cards
