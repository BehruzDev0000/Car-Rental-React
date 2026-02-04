import ServiceItems from "../../components/services/serviceItems"

const Services = () => {
  return (
    <section className="mb-[160px]">
        <div className="containers !px-0">
            <div className="max-w-[684px] mx-auto text-center">
                <h2 className="font-semibold text-[36px] text-[#000000]">Unparalleled service</h2>
                <p className="text-[16px] leading-[24px] text-[#555555] mt-[10px]">Whether you are looking for Newark Airport car rental, an insurance replacement vehicle or minivan to take on vacation Car rental has it all.</p>
            </div>
            <ServiceItems/>
        </div>
    </section>
  )
}

export default Services