import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import Button from "../header/button";
import Modal from "../modal/modal";
import CreateModal from "../modal/createModal";

const Categories = () => {
  const {
    categories,
    activeCategoryId,
    setActiveCategoryId,
    createCar, 
  } = useContext(Context);

  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <>
      <div className="flex items-center gap-[50px] max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between gap-4">
          {categories.map((category) => {
            const isActive = activeCategoryId === category.id;

            return (
              <Button
                key={category.id}
                onClick={() => setActiveCategoryId(category.id)}
                extraStyle={`
                  !py-[19px] !px-[40px]
                  whitespace-nowrap
                  border-[1.5px] rounded-[100px] font-medium transition
                  ${
                    isActive
                      ? "bg-[#299764] text-white border-transparent"
                      : "bg-transparent text-black border-[#E5E7EA] hover:bg-[#299764] hover:text-white hover:border-transparent"
                  }
                `}
              >
                {category.label}
              </Button>
            );
          })}
        </div>

        <div>
          <Button
            onClick={() => setShowCreateModal(true)}
            extraStyle="bg-[#299764] text-white px-[40px] py-[19px]"
          >
            Create
          </Button>
        </div>
      </div>
      <Modal showModal={showCreateModal} setShowModal={setShowCreateModal}>
        <CreateModal
          onCancel={() => setShowCreateModal(false)}
          onCreate={(newCar) => {
            createCar(newCar);
            setShowCreateModal(false);
          }}
        />
      </Modal>
    </>
  );
};

export default Categories;
