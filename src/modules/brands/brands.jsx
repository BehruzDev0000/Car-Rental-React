import BrandsList from "../../components/brands/BrandsList"

const Brands = () => {
  return (
    <section className="py-[160px] bg-white">
        <div className="containers">
            <h3 className="font-medium text-[#000000] text-[24px] mb-[34px]">More than 50 brands of cars</h3>
            <marquee  behavior="scrool" direction="left">
                <BrandsList />
            </marquee>
        </div>
    </section>
  )
}

export default Brands