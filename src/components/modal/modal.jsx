function Modal({ children, showModal, setShowModal }) {
  return (
    <div
      id="wrapper"
      onClick={(e) => e.target.id === "wrapper" && setShowModal(false)}
      className={`fixed inset-0 z-50 flex items-center justify-center transition duration-300
        ${showModal ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
        bg-black/40 backdrop-blur-md
      `}
    >
      {children}
    </div>
  );
}

export default Modal;
