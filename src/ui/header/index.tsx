// type HeaderProps = {};

import AppLogo from "../../assets/creat8genius.png";
import { GiHamburgerMenu } from "react-icons/gi";
import IconButtonWrapper from "../../components/icon-button-wrapper/icon-button-wrapper";
import Icons from "../../components/icons";
import Modal from "../../components/modal/modal";
import { ModalId } from "../../shared/enums";
import { useAppSelector } from "../../shared/hooks";

// import Login from "../login";
// import Logout from "../logout/logout";

export default function Header() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  return (
    // <Modal>
    <div className=" grid grid-cols-2 place-items-center md:flex items-center justify-between w-full bg-white-500 py-6 px-5  bg-white">
      <div className=" flex items-center justify-start">
        <img src={AppLogo} alt="crea8genius" className="  w-full" />
      </div>
      <div className=" flex items-center justify-center space-x-4 md:space-x-0  md:justify-between  ">
        {!isLoggedIn && (
          <div className=" flex items-center justify-start space-x-4">
            <span
              className="text-xxl hover:text-black duration-0 text-blue-400 mr-10 hidden md:visible
              "
            >
              Welcome
            </span>
            <span className="text-xxl hover:text-black duration-0 text-blue-400 mr-20">
              Hargent
            </span>
          </div>
        )}
        <GiHamburgerMenu />
        <Modal.Open id={!isLoggedIn ? ModalId.Login : ModalId.Logout}>
          <div className=" flex items-center justify-between space-x-4">
            {!isLoggedIn ? (
              <span className="text-xxl text-white mr-20 bg-blue-500 border-red-300 px-5 py-2 rounded-md hover:text-blue duration-0 hover:bg-blue-500">
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
