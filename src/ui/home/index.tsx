import Modal from "../../components/modal/modal";
import { ModalId } from "../../shared/enums";
import Header from "../header";
import Login from "../login";
import Logout from "../logout/logout";
import Register from "../register";

export default function Home() {
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
