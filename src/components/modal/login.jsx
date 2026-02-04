import { CloseIcon, LoginIcon } from "../../assets/icons";
import Button from "../header/button";
import "bootstrap-icons/font/bootstrap-icons.css";

const Login = ({ onClose = () => {} }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="w-[590px] rounded-[20px] bg-white px-[32px] py-[40px] text-center shadow-[0px_0px_100px_0px_#0000001A] relative z-[10]">
      <h2 className="font-semibold text-[36px] text-[#000000]">Login</h2>
      <p className="text-[16px] leading-[24px] text-[#555555] mt-[10px]">
        Use the email and password that you log in
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="border-[#299764] border-[2px] rounded-[82px]">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full bg-transparent text-[18px] font-semibold text-[#000000] outline-none placeholder:text-[#555555] py-[18px] pl-[30px] pr-[20px] rounded-[82px]"
          />
        </div>

        <div className="border-[#FF3B30] border-[2px] rounded-[82px] flex items-center gap-3 py-[18px] px-[30px]">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full bg-transparent text-[18px] font-semibold text-[#000000] outline-none placeholder:text-[#555555]"
          />
          <i className="fa-solid fa-eye"></i>
        </div>

        <div className="mt-[8px] flex items-center justify-between">
          <a href="/" className="text-[14px] text-[#FF3B30] font-medium">
            Entered the wrong password
          </a>
          <a href="/" className="text-[14px] text-[#555555] font-medium">
            Forgot password
          </a>
        </div>

        <strong className="block text-[16px] text-[#000000] font-medium text-center cursor-pointer">
          I want to create an account
        </strong>

        <Button
          type="submit"
          extraStyle="bg-[#299764] text-white w-full flex items-center justify-center gap-[8px] rounded-[100px] py-[18px]"
        >
          Log In
          <LoginIcon />
        </Button>
      </form>

      <button
        type="button"
        onClick={onClose}
        className="w-[58px] h-[58px] p-[18px] rounded-[100px] bg-[#F5F5F5] absolute top-[42px] right-[42px] z-[100] flex items-center justify-center"
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default Login;
