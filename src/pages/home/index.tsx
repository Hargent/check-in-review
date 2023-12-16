import { UserState, deleteUser, saveUser } from "../../redux/slice/user-slice";
import { loginUser, logoutUser } from "../../redux/slice/auth-slice";

import Header from "../../ui/header";
import Login from "../../ui/login";
import Logout from "../../ui/logout/logout";
import Modal from "../../components/modal/modal";
import { ModalId } from "../../shared/enums";
import Register from "../../ui/register";
import { ScaleLoader } from "react-spinners";
import { removeAccessKey } from "../../utils/cookies";
import { useAppDispatch } from "../../shared/hooks";
import { useEffect } from "react";
import { useUser } from "../../services/hooks/user";

export default function Home() {
  const { user, fetchedUser, fetchingUser } = useUser();
  const dispatch = useAppDispatch();
  useEffect(() => {
    // if (userError) return;
    if (user && fetchedUser) {
      dispatch(saveUser({ ...user.data } as UserState));
      dispatch(loginUser());
    } else {
      dispatch(deleteUser());
      dispatch(logoutUser());
      removeAccessKey();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedUser]);
  if (fetchingUser) {
    <ScaleLoader className=" text-4xl text-center mx-auto text-gray-600" />;
  }
  return (
    <Modal>
      <div className="">
        <Header />
        <h1>Home</h1>
      </div>
      <Modal.Window
        id={ModalId.Register}
        outsideClose={true}
        additionalClass=""
      >
        <Register />
      </Modal.Window>
      <Modal.Window outsideClose={true} additionalClass="" id={ModalId.Login}>
        <Login />
      </Modal.Window>
      <Modal.Window outsideClose={true} additionalClass="" id={ModalId.Logout}>
        <Logout />
      </Modal.Window>
    </Modal>
  );
}
