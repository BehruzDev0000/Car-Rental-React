import { Href, NavList, Button } from "../../components/header/index.jsx";
import { LoginIcon, MoonIcon, SiteLogo } from "../../assets/icons";
import { useContext, useState } from "react";
import { Context } from "./../../context/Context.jsx";
import Modal from "../../components/modal/modal.jsx";
import Login from "../../components/modal/login.jsx"; 

const Header = () => {
  const { navList } = useContext(Context);

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <header className="py-[18px] border-b-[1.5px] border-[#E5E7EA]">
        <div className="containers">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[20px]">
              <Href href="#" style="">
                <SiteLogo />
              </Href>
              <NavList item={navList} />
            </div>

            <div className="flex items-center gap-[16px]">
              <Href
                href="tel:+18554200000"
                style="text-[#000000] font-semibold text-[18px]"
              >
                +1 855 420 0000
              </Href>

              <div className="flex items-center gap-[24px]">
                <Button type="button" extraStyle="bg-[#F5F5F5] !p-[21px]">
                  <MoonIcon />
                </Button>

                <Button
                  type="button"
                  onClick={() => setShowLogin(true)}
                  extraStyle="flex items-center gap-[8px] text-white bg-[#299764] !px-[30px] font-medium text-[18px]"
                >
                  Login
                  <LoginIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Modal showModal={showLogin} setShowModal={setShowLogin}>
        <Login onClose={() => setShowLogin(false)} />
      </Modal>
    </>
  );
};

export default Header;
