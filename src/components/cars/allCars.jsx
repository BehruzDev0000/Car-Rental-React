import { useContext } from "react";
import { Context } from "../../context/Context.jsx";
import { CarItem } from "./index";

const AllCars = () => {
  const { cars, activeCategoryId } = useContext(Context);

  const filteredCars =
    activeCategoryId === 0
      ? cars
      : cars.filter((car) => car.categoryId === activeCategoryId);

  return (
    <div className="mt-[24px] grid grid-cols-3 gap-[20px]">
      {filteredCars.map((car) => (
        <CarItem car={car} key={car.id} />
      ))}
    </div>
  );
};

export default AllCars;
