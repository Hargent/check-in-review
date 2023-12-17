"use client";

import { ModalId } from "../../shared/enums";
import { useAppSelector } from "../../shared/hooks";

import IconButtonWrapper from "../icon-button-wrapper/icon-button-wrapper";
import Icons from "../icons";
import Modal from "../modal/modal";
import AppLogo from "../../assets/creat8genius.png";
import useMediaQuery from "../../shared/hooks/use-media-query/use-media-query";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function MobileNav({ onCloseModal }: { onCloseModal?: (id: ModalId) => void }) {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const user = useAppSelector((state) => state.user);
  const media600 = useMediaQuery({ screen: "600px", type: "min" });
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("====================================");
  console.log(currentPath);
  console.log("====================================");

  useEffect(() => {
    if (!media600) return;
    onCloseModal?.(ModalId.MobileNav);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [media600]);

  return (
    <div className=" overflow-hidden relative w-full h-screen bg-primary-300  flex items-center flex-col justify-center space-y-10">
      <IconButtonWrapper
        extendedClassNames=" absolute top-0 right-0 p-3 rounded-full bg-white mr-4 mt-4 "
        onClick={() => onCloseModal?.(ModalId.MobileNav)}
      >
        <Icons.IconMenuClose size={20} fillColor="rgb(37 99 235)" />
      </IconButtonWrapper>
      {/* <div className=" flex items-center justify-center space-x-4 md:space-x-0  md:justify-between justify-self-end"> */}
      <div className=" flex items-center justify-start justify-self-start">
        <img src={AppLogo} alt="crea8genius" className="  w-full" />
      </div>
      {isLoggedIn && (
        <div className=" flex uppercase items-center justify-center space-x-1 ">
          {currentPath !== "/dashboard" && (
            <Link
              to={"/dashboard"}
              className="transition-colors duration-300 ease-in-out text-sm text-primary-700 hover:text-primary-600"
            >
              dashboard
            </Link>
          )}
          {currentPath !== "/results" && (
            <Link
              to={"/results"}
              className="transition-colors duration-300 ease-in-out text-sm text-primary-700 hover:text-primary-600"
            >
              results
            </Link>
          )}
          {currentPath !== "/review" && (
            <Link to={"/review"} className="">
              review
            </Link>
          )}
        </div>
      )}
      {isLoggedIn && (
        <div className=" flex items-center justify-center space-x-1 uppercase cursor-default hover:animate-pulse">
          <span
            className="text-2xl rounded-lg p-2 duration-0 text-white  
              "
          >
            Welcome
          </span>
          <span className="text-2xl rounded-lg p-2 duration-0 text-white  ">
            {user.username}
          </span>
        </div>
      )}

      <Modal.Open
        id={!isLoggedIn ? ModalId.Login : ModalId.Logout}
        additionalClassName=" flex items-center justify-center"
      >
        <div className="w-4/5 mx-auto transform translate-x-1/4 capitalize font-semibold flex items-center justify-center space-x-4 text-xl text-white mr-20 border border-white px-5 py-2 rounded-md hover:text-primary duration-0 hover:bg-white hover:text-primary-600">
          {!isLoggedIn ? <span className="">Login</span> : <span>logout</span>}
          <IconButtonWrapper extendedClassNames="">
            <Icons.IconDoor isLoggedIn={isLoggedIn} />
          </IconButtonWrapper>
        </div>
      </Modal.Open>

      {/* </div> */}
    </div>
  );
}

export default MobileNav;
