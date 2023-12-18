import { Link, useLocation } from "react-router-dom";

import AppLogo from "../../assets/creat8genius.png";
import IconButtonWrapper from "../icon-button-wrapper/icon-button-wrapper";
import Icons from "../icons";
import Modal from "../modal/modal";
import { ModalId } from "../../shared/enums";
import { useAppSelector } from "../../shared/hooks";
import { useEffect } from "react";
import useMediaQuery from "../../shared/hooks/use-media-query/use-media-query";
import { useModalAutoTrigger } from "../modal/use-modal";

function MobileNav({ onCloseModal }: { onCloseModal?: (id: ModalId) => void }) {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const user = useAppSelector((state) => state.user);
  const media640 = useMediaQuery({ screen: "600px", type: "min" });
  const location = useLocation();
  const currentPath = location.pathname;
  const { autoTriggerModal } = useModalAutoTrigger();

  function closeMobileNav() {
    autoTriggerModal({ action: "close", id: ModalId.MobileNav });
  }
  useEffect(() => {
    if (!media640) return;
    onCloseModal?.(ModalId.MobileNav);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [media640]);

  return (
    <div className=" overflow-x-hidden relative w-full h-screen bg-green-300   flex items-center flex-col justify-center space-y-10">
      <IconButtonWrapper
        extendedClassNames=" absolute top-0 right-0 p-3 rounded-full bg-white mr-4 mt-4 "
        onClick={() => onCloseModal?.(ModalId.MobileNav)}
      >
        <Icons.IconMenuClose size={20} fillColor="rgb(37 99 235)" />
      </IconButtonWrapper>
      {/* <div className=" flex items-center justify-center space-x-4 md:space-x-0  md:justify-between justify-self-end"> */}
      <div className=" flex items-center justify-start justify-self-start  py-3 ">
        <img src={AppLogo} alt="crea8genius" className="  w-full" />
      </div>
      {isLoggedIn && (
        <div className=" flex uppercase items-center justify-center flex-col text-center space-y-3">
          {currentPath !== "/dashboard" && (
            <Link
              to={"/dashboard"}
              onClick={closeMobileNav}
              className="transition-colors duration-300 ease-in-out text-sm border border-primary-800 text-primary-600 hover:text-primary-100 hover:bg-primary-600 rounded-lg py-2 px-4"
            >
              dashboard
            </Link>
          )}
          {currentPath !== "/results" && (
            <Link
              to={"/results"}
              onClick={closeMobileNav}
              className="transition-colors duration-300 ease-in-out text-sm border border-primary-800 text-primary-600 hover:text-primary-100 hover:bg-primary-600 rounded-lg py-2 px-4"
            >
              results
            </Link>
          )}
          {currentPath !== "/review" && (
            <Link
              to={"/review"}
              onClick={closeMobileNav}
              className="transition-colors duration-300 ease-in-out text-sm border border-primary-800 text-primary-600 hover:text-primary-100 hover:bg-primary-600 rounded-lg py-2 px-4"
            >
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
        <div className="w-4/5 mx-auto transform translate-x-1/4 capitalize font-semibold flex items-center justify-center space-x-4 text-xl text-white mr-20 border border-white px-5 py-2 rounded-md duration-0 hover:bg-white hover:text-primary-100">
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
