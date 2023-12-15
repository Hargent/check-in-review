import { Outlet } from "react-router-dom";
import React from "react";
import Header from "../header";
import Modal from "../../components/modal/modal";
import { ModalId } from "../../shared/enums";
import Register from "../register";
import Login from "../login";
import Logout from "../logout/logout";

const AppLayout: React.FC = () => {
  return (
    <Modal>
      <main className="">
        <Header />
        <section>
          <div>
            <Outlet />
          </div>
        </section>
      </main>
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
};

export default AppLayout;
