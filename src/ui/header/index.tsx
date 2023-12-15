// type HeaderProps = {};

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
      <div className=" flex items-center justify-between w-full bg-green-500 py-6 px-5">
        <div className="">
          <img src={AppLogo} alt="crea8genius" />
        </div>
       
        <div className=" flex items-center justify-end space-x-6">
          {!isLoggedIn && (
            <div className=" flex items-center justify-start space-x-4">
              <span>welcome</span>
              <span>Hargent</span>
            </div>
          )}
          <Modal.Open id={!isLoggedIn ? ModalId.Login : ModalId.Logout}>
            <div className=" flex items-center justify-between space-x-4">
              {!isLoggedIn ? <span>login</span> : <span>logout</span>}
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
