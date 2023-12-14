// type HeaderProps = {};

import AppLogo from "../../assets/creat8genius.png";
import IconButtonWrapper from "../../components/icon-button-wrapper/icon-button-wrapper";
import Icons from "../../components/icons";

export default function Header() {
  return (
    <div className=" flex items-center justify-between w-full bg-green-500 py-6 px-5">
      <div className="">
        <img src={AppLogo} alt="crea8genius" />
      </div>
      <div className=" flex items-center justify-end space-x-6">
        <div className=" flex items-center justify-start space-x-4">
          <span>welcome</span>
          <span>Hargent</span>
        </div>
        <div className=" flex items-center justify-between space-x-4">
          <span>login/logout</span>
          <IconButtonWrapper extendedClassNames="">
            <Icons.IconDoor isLoggedIn={false} />
          </IconButtonWrapper>
        </div>
      </div>
    </div>
  );
}
// profile {name, login/logout}
//logo
