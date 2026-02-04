function Button({ extraStyle = "", onClick, children, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick || undefined}
      className={`rounded-[100px] py-[18px] cursor-pointer outline-none ${extraStyle}`}
    >
      {children}
    </button>
  );
}

export default Button;
