import Header from "../header";
import Login from "../login";
import Logout from "../logout/logout";
import Modal from "../../components/modal/modal";
import { ModalId } from "../../shared/enums";
import Nav from "../nav-bar";
import { Outlet } from "react-router-dom";
import React from "react";
import Register from "../register";

// import MobileNav from "../../components/mobile-nav/mobile-nav";

const AppLayout: React.FC = () => {
  return (
    <Modal>
      <main className="grid grid-rows-[max-content_max-content_1fr] h-screen">
        <Header />
        <Nav />
        <section className=" relative w-full h-full bg-primary-800 px-5 ss:px-10 overflow-x-hidden py-10">
          <div className=" w-full ">
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
