import Modal from "../modal/modal";
import DeleteModalInner from "../modal/deleteModal";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { UserIcon,EngineIcon,UserDocIcon,FuelIcon } from "../../assets/icons";
import "bootstrap-icons/font/bootstrap-icons.css";
const CarItem = ({ car }) => {
  const { deleteCar } = useContext(Context);

  const [showModal, setShowModal] = useState(false);

  function handleDeleteModal() {
    setShowModal(true);
  }

  function handleConfirm() {
    deleteCar(car.id);
    setShowModal(false);
  }
  return (
    <div className="relative py-[30px] bg-[#F5F5F5] rounded-[16px] max-w-[387px] hover:bg-[#299764]">
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <DeleteModalInner
          onCancel={() => setShowModal(false)}
          onConfirm={handleConfirm}
        />
      </Modal>
      <div className="absolute bottom-4 right-4 z-10">
        <button
          className="outline-none border-none bg-none cursor-pointer"
          onClick={handleDeleteModal}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>

        <div className="px-[24px] relative">
            <h3 className="font-semibold text-[24px]">
                {car.title}
            </h3>
            <p className="text-[#555555] font-medium text-[16px] mt-[8px]">{car.type}</p>
        </div>
        <img src={car.image} alt={car.title} className="w-full h-[220px] mt-[16px] object-cover" />
        
        <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-[14px] text-black pl-[24px]">

  <div className="flex items-center gap-2">
    <UserIcon className="w-4 h-4" />
    <span className="text-[16px] font-medium">{car.seats} Seats</span>
  </div>

  <div className="flex items-center gap-2">
    <EngineIcon className="w-4 h-4" />
    <span className="text-[16px] font-medium">{car.transmission}</span>
  </div>

  <div className="flex items-center gap-2">
    <UserDocIcon className="w-4 h-4" />
    <span className="text-[16px] font-medium">{car.age}</span>
  </div>

  <div className="flex items-center gap-2">
    <FuelIcon className="w-4 h-4" />
    <span className="text-[16px] font-medium">{car.fuel}</span>
  </div>

</div>

    </div>
  )
}

export default CarItem