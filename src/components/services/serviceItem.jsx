const ServiceItem = ({item}) => {
  return (
    <div className="bg-[#F5F5F5] rounded-[20px] py-[40px] pr-[40px] pl-[32px] flex items-start justify-between">
       <div className="max-w-[354px]">
         <h3 className={`text-[#000000] text-[32px] font-medium `} style={{maxWidth: item.textLength + 'px'}}>{item.title}</h3>
        <p className="text-[#555555] text-[16px] leading-[24px] mt-[10px]">{item.text}</p>
       </div>
       <div>
        {
            item.image
        }
       </div>
    </div>
  )
}

export default ServiceItem