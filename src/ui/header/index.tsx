import { Link, useLocation } from "react-router-dom";

import AppLogo from "../../assets/creat8genius.png";
import IconButtonWrapper from "../../components/icon-button-wrapper/icon-button-wrapper";
import Icons from "../../components/icons";
import MobileNav from "../../components/mobile-nav/mobile-nav";
import Modal from "../../components/modal/modal";
import { ModalId } from "../../shared/enums";
import { useActiveModal } from "../../components/modal/use-modal";
import { useAppSelector } from "../../shared/hooks";
import useMediaQuery from "../../shared/hooks/use-media-query/use-media-query";

export default function Header() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const user = useAppSelector((state) => state.user);
  const media640 = useMediaQuery({ screen: "640px", type: "min" });
  const { isModalActive } = useActiveModal();
  const location = useLocation();
  const currentPath = location.pathname;

  // }
  return (
    // <Modal>
    <div className=" grid grid-cols-2 sm:grid-cols-[1fr_0.5fr_1fr] sm:flex items-center justify-between w-full  py-3 px-5 bg-primary-500">
      <Link
        to={"/home"}
        className=" flex items-center justify-start justify-self-start"
      >
        <img src={AppLogo} alt="crea8genius" className="  w-full" />
      </Link>
      {media640 && isLoggedIn && (
        <div className=" flex capitalize items-center justify-center space-x-4 ">
          {currentPath !== "/dashboard" && (
            <Link
              to={"/dashboard"}
              className="transition-colors duration-300 ease-in-out text-xs md:text-lg text-primary-200 hover:border-b-primary-200 border border-transparent"
            >
              dashboard
            </Link>
          )}
          {currentPath !== "/results" && (
            <Link
              to={"/results"}
              className="transition-colors duration-300 ease-in-out text-xs md:text-lg text-primary-200 hover:border-b-primary-200 border border-transparent"
            >
              results
            </Link>
          )}
          {currentPath !== "/review" && (
            <Link
              className="transition-colors duration-300 ease-in-out text-xs md:text-lg text-primary-200 hover:border-b-primary-200 border border-transparent"
              to={"/review"}
            >
              review
            </Link>
          )}
        </div>
      )}
      <div className=" flex items-center  space-x-4  justify-self-end">
        {isLoggedIn && (
          <div className=" flex items-center justify-start space-x-4 cursor-default hover:animate-pulse">
            <span
              className="text-2xl   duration-0 text-primary-200  hidden md:inline-block
              "
            >
              Welcome
            </span>
            <span className="text-2xl  duration-0 text-primary-200">
              {user.username}
            </span>
          </div>
        )}
        <div className=" flex items-center justify-end ">
          {!media640 ? (
            <Modal.Open id={ModalId.MobileNav} additionalClassName="self-end">
              <IconButtonWrapper extendedClassNames=" p-3 rounded-full transition-colors duration-300 ease-in-out bg-primary-300 hover:bg-primary-300 ">
                <Icons.IconMenuOpen fillColor="white" size={20} />
              </IconButtonWrapper>
            </Modal.Open>
          ) : (
            <Modal.Open
              id={!isLoggedIn ? ModalId.Login : ModalId.Logout}
              additionalClassName=" self-end"
            >
              <div className=" flex items-center justify-end space-x-4 text-2xl text-white  bg-primary-100 border-transparent px-5 py-2 capitalize  hover:text-primary-200 duration-0 hover:bg-transparent border rounded-lg hover:border-primary-100">
                {!isLoggedIn ? (
                  <span className="">Login</span>
                ) : (
                  <span>logout</span>
                )}
                <IconButtonWrapper extendedClassNames="">
                  <Icons.IconDoor isLoggedIn={isLoggedIn} />
                </IconButtonWrapper>
              </div>
            </Modal.Open>
          )}
        </div>
      </div>

      <Modal.Window
        containerClass={`${
          isModalActive(ModalId.MobileNav)
            ? "modal-animate-enter"
            : "modal-animate-leave"
        } overflow-auto w-full h-full fixed top-0 right-0 flex items-center justify-center bg-opacity-90 backdrop-blur-sm z-50`}
        outsideClose={false}
        additionalClass="modal absolute right-0 top-0 w-4/5  h-screen"
        id={ModalId.MobileNav}
        isChildren={true}
      >
        <MobileNav />
      </Modal.Window>

      {/* <Modal.Window
        containerClass="overflow-auto w-full h-full fixed top-0 left-0 flex items-center justify-center   bg-opacity-90 backdrop-blur-sm  z-50"
        outsideClose={true}
        additionalClass="absolute right-0 top-0 w-4/5 bg-red-500 h-screen"
        id={ModalId.MobileNav}
        isChildren={true}
      >
        <MobileNav />
      </Modal.Window> */}
    </div>
  );
}
{
  /* </div> */
}
// profile {name, login/logout}
//logo
//  <div className=" flex items-center justify-end space-x-6">
//     {!isLoggedIn && (
//       <div className=" flex items-center justify-start space-x-4">
//         <span>welcome</span>
//         <span>Hargent</span>
//       </div>
//     )}
//     <Modal.Open id={!isLoggedIn ? ModalId.Login : ModalId.Logout}>
//       <div className=" flex items-center justify-between space-x-4">
//         {!isLoggedIn ? <span>login</span> : <span>logout</span>}
//         <IconButtonWrapper extendedClassNames="">
//           <Icons.IconDoor isLoggedIn={isLoggedIn} />
//         </IconButtonWrapper>
//       </div>
//     </Modal.Open>
//   </div>
