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

// import { UserState, saveUser } from "../../redux/slice/user-slice";
// import { loginUser } from "../../redux/slice/auth-slice";

export default function Home() {
  const { user, fetchedUser, fetchingUser } = useUser();
  const dispatch = useAppDispatch();
  useEffect(() => {
    // if (userError) return;
    if (user && fetchedUser) {
      dispatch(saveUser({ ...user.data } as UserState));
      dispatch(loginUser());
    } else {
      // return;
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
      <Header />
      <div className="bg-white text-primary-100 mx-10 my-40 md:my-60 px-7 text-4xl md:text-6xl justify-center items-center capitalize font-bold flex flex-col space-y-8 ">
        <h1 className=" text-center">Boost your business traffic & sales</h1>
        <p className="text-lg my-4 text-primary-200 text-center">
          Marketing experts are ready to help you
        </p>
      </div>
      <div className="bg-primary-200 text-gray-600 py-40 flex  flex-col space-y-6 justify-center items-center uppercase mt-10   ">
        <h3 className="text-2xl mb-6 mt-6 text-center uppercase items-center flex flex-1  font-bold">
          Our Features
        </h3>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          <div className="text-center flex flex-col items-center justify-start space-y-6 text-gray-600 font-semibold  bg-white py-20 px-5 shadow-2xl rounded-2xl transition-transform transform duration-300 ease-in-out hover:-translate-y-6">
            <h2 className=" "> Online presence creator</h2>
            <p className="text-sm py-30 mt-8 text-primary-200">
              This package is designed for businesses <br />
              about to lauch into the Digital space. <br />
              It covers all you need.
            </p>
            <hr className="mt-20" />
            <button className=" hover:bg-primary-200 hover:text-primary-800 transition-colors duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-100 active:shadow-none capitalize text-primary-100 p-2 rounded-lg border border-primary-200">
              Learn More
            </button>
          </div>
          <div className="text-center flex flex-col items-center justify-start space-y-6 text-gray-600 font-semibold  bg-white py-20 px-5 shadow-2xl rounded-2xl transition-transform transform duration-300 ease-in-out  hover:-translate-y-6">
            <h2 className=" justify-center items-center flex">
              {" "}
              Online business booster
            </h2>
            <p className="text-sm py-30 mt-8 text-primary-200">
              Have a business online butneed to boost <br /> your traffic and
              hit your sale numbers,
              <br /> then this offer is designed for you.
            </p>
            <hr className="mt-10" />
            <button className=" hover:bg-primary-200 hover:text-primary-800 transition-colors duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-100 active:shadow-none capitalize text-primary-100 p-2 rounded-lg border border-primary-200">
              Learn More
            </button>
          </div>
          <div className="text-center flex flex-col items-center justify-start space-y-6 text-gray-600 font-semibold  bg-white py-20 px-5 shadow-2xl rounded-2xl transition-transform transform duration-300 ease-in-out  hover:-translate-y-6">
            <h2 className=" justify-center items-center flex">
              {" "}
              Online business optimizer
            </h2>
            <p className="text-sm py-30 mt-8 text-primary-200">
              {" "}
              Optimizing your business yields a proven <br />
              40% surge in organic traffic and sales.
              <br />
              Spend less on ads by optimizing today.
            </p>
            <hr className="mt-10" />
            <button className=" hover:bg-primary-200 hover:text-primary-800 transition-colors duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-100 active:shadow-none capitalize text-primary-100 p-2 rounded-lg border border-primary-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <footer className=" bg-primary-600 pt-20  pb-9">
        <div className=" flex flex-col items-center justify-center space-y-6">
          <div className="flex justify-center space-x-12 ss:space-x-20 items-center">
            <div className=" text-primary-200 font-semibold border border-transparent transition-colors duration-300 ease-in-out hover:border-b-primary-200 cursor-pointer ">
              <p>Home</p>
            </div>
            <div className=" text-primary-200 font-semibold border border-transparent transition-colors duration-300 ease-in-out hover:border-b-primary-200 cursor-pointer">
              <p>Privacy</p>
            </div>
            <div className=" text-primary-200 font-semibold border border-transparent transition-colors duration-300 ease-in-out hover:border-b-primary-200 cursor-pointer">
              <p>Terms</p>
            </div>
          </div>
          <div className=" text-primary-200 font-semibold  cursor-default flex items-center justify-center space-x-4">
            <span>&copy; {new Date().getFullYear()}</span>
            <span>All right reserved</span>
          </div>
        </div>
      </footer>

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
