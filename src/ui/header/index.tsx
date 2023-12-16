// type HeaderProps = {};

import AppLogo from "../../assets/creat8genius.png";
import IconButtonWrapper from "../../components/icon-button-wrapper/icon-button-wrapper";
import Icons from "../../components/icons";

import Modal from "../../components/modal/modal";
import { ModalId } from "../../shared/enums";
import { useAppSelector } from "../../shared/hooks";
import useMediaQuery from "../../shared/hooks/use-media-query/use-media-query";
import { useActiveModal } from "../../components/modal/use-modal";
import MobileNav from "../../components/mobile-nav/mobile-nav";

// import Login from "../login";
// import Logout from "../logout/logout";

export default function Header() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const user = useAppSelector((state) => state.user);
  const media600 = useMediaQuery({ screen: "600px", type: "min" });
  const { isModalActive } = useActiveModal();

  // }
  return (
    // <Modal>
    <div className=" grid grid-cols-2  md:flex items-center justify-between w-full  py-6 px-5 bg-secondary-500">
      <div className=" flex items-center justify-start justify-self-start">
        <img src={AppLogo} alt="crea8genius" className="  w-full" />
      </div>
      <div className=" flex items-center  space-x-4  justify-self-end">
        {isLoggedIn && (
          <div className=" flex items-center justify-start space-x-4 cursor-default">
            <span
              className="text-2xl hover:text-primary duration-0 text-primary-700  hidden md:inline-block
              "
            >
              Welcome
            </span>
            <span className="text-2xl hover:text-primary duration-0 text-primary-700">
              {user.username}
            </span>
          </div>
        )}
        <div className=" flex items-center justify-end ">
          {!media600 ? (
            <Modal.Open id={ModalId.MobileNav} additionalClassName="self-end">
              <IconButtonWrapper extendedClassNames=" p-3 rounded-full transition-colors duration-300 ease-in-out bg-auxiliary-300 hover:bg-auxiliary-700 ">
                <Icons.IconMenuOpen fillColor="white" size={20} />
              </IconButtonWrapper>
            </Modal.Open>
          ) : (
            <Modal.Open
              id={!isLoggedIn ? ModalId.Login : ModalId.Logout}
              additionalClassName=" self-end"
            >
              <div className=" flex items-center justify-end space-x-4 text-2xl text-white  bg-blue-500 border-red-300 px-5 py-2 rounded-md hover:text-blue duration-0 hover:bg-blue-500">
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
