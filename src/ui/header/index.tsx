// type HeaderProps = {};

import { useState } from "react";
import AppLogo from "../../assets/creat8genius.png";
import IconButtonWrapper from "../../components/icon-button-wrapper/icon-button-wrapper";
import Icons from "../../components/icons";
import Modal from "../../components/modal/modal";
import { ModalId } from "../../shared/enums";
import { useAppSelector } from "../../shared/hooks";
import Login from "../login";
import Logout from "../logout/logout";

export default function Header() {
  
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  return (
    <Modal>
      <div className=" grid grid-cols-2 place-items-center md:fllex items-center justify-between w-full bg-white-500 py-6 px-5 bg-white ">
        <div className="flex items-center w-full ">
          <img src={AppLogo} alt="crea8genius" className=" " />
        </div>
        <div className="  items-center justify-end font-normal space-x-6 hidden ss:flex">
          {!isLoggedIn && (
            <div className=" flex items-center justify-start space-x-4">
              <span
                className="text-xxl hover:text-black duration-0 text-blue-400 mr-10 sm:w-8 p-3 hidden md:inline
              "
              >
                Welcome
              </span>
              <span className="text-xxl hover:text-black duration-0 text-blue-400 mr-20">
                Hargent
              </span>
              
            </div>
            
          )}
          
          <div className="p-2 rounded-full bg-blue-500 text-white">
          <span className=" w-full"> <i className="fa-solid fa-bars w-fullnn"></i></span>
          </div>
        
          <Modal.Open id={!isLoggedIn ? ModalId.Login : ModalId.Logout}>
            <div className="flex items-center justify-center space-x-4 text-xxl text-white mr-20 bg-blue-500 border-red-300 px-5 py-2 rounded-md hover:text-blue duration-0 hover:bg-blue-500n sm:py-100  text-lg">
              {!isLoggedIn ? (
                <span className="">
                  Login
                </span>
              ) : (
                <span>logout</span>
              )}
              <IconButtonWrapper extendedClassNames="">
                <Icons.IconDoor isLoggedIn={isLoggedIn} />
              </IconButtonWrapper>
            </div>
          </Modal.Open>
        </div>
      </div>
      <Modal.Window outsideClose={true} additionalClass="" id={ModalId.Login}>
        <Login />
      </Modal.Window>
      <Modal.Window outsideClose={true} additionalClass="" id={ModalId.Logout}>
        <Logout />
      </Modal.Window>
    </Modal>
  );
}
// profile {name, login/logout}
//logo