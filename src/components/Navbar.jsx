import React from "react";
import logoHome from "../assets/img/logoHome.png";
import cartIcon from "../assets/img/cart.png";
import notification from "../assets/img/notification.png";
import avatar from "../assets/img/avatar.png";

const Navbar = () => {
  return (
    <nav>
      <div className="h-[88px] border-b p-4">
        <section className="flex justify-between items-center h-full">
          <img src={logoHome} alt="logo" className="h-[46px]" />
          <div className="flex justify-between items-center">
            <div className="flex gap-4 p-2">
              <img src={cartIcon} alt="cartIcon" />
              <img src={notification} alt="notification" />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col border-l p-2">
                <p>Harry Maguire, S.Kom</p>
                <p>NIK: 16712325848493033</p>
              </div>
              <img src={avatar} alt="avatar" className="rounded-full h-[46px]" />
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
