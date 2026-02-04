const CardItem = ({ item }) => {
  return (
    <div
      className="w-full h-full rounded-[20px]"
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white pt-[60px] mx-auto text-center max-w-[416px]">
        <h2 className="text-white text-[36px] font-semibold">{item.title}</h2>
        <p className="text-white text-[16px] mt-[10px]">{item.text}</p>
      </div>
    </div>
  );
};

export default CardItem;
