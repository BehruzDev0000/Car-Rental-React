import { useContext } from "react";
import { Context } from "../../context/Context";

const SafetyCards = () => {
  const { safetyItems } = useContext(Context);

  return (
    <div className="relative overflow-hidden rounded-[16px] border border-[#E5E7EA] bg-white px-[15px] pb-[15px] lg:px-8 lg:py-8">
      <div className="relative z-10 lg:pr-[420px]">
        <h3 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold text-black font-semibold">
          {safetyItems.title}
        </h3>

        <p className="mt-[10px] max-w-[560px] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-[#555555]">
          {safetyItems.text}
        </p>

        <div className="mt-[94px] flex flex-nowrap gap-[10px]">
          {safetyItems.items.map((item) => {
            const Icon = item.image;
            return (
              <div
                key={item.id}
                className="relative h-[160px] w-[200px] flex-none rounded-[16px] bg-[#F5F5F5] shadow-md px-[16px] pb-[15px]"
              >
                <div className="absolute right-[25px] top-[25px]">
                  {Icon ? <Icon /> : null}
                </div>

                <div className="h-full flex items-end">
                  <p className="text-[13px] sm:text-[14px] leading-[18px] font-medium text-black">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-0 right-0 hidden lg:block">
        <div className="relative w-[386px] h-[472px]">
          <img
            src={safetyItems.image}
            alt="Safety"
            className="absolute right-[113px] top-[30px] w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SafetyCards;
