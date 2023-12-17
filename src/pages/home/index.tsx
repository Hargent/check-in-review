import { UserState, deleteUser, saveUser } from "../../redux/slice/user-slice";
import { loginUser, logoutUser } from "../../redux/slice/auth-slice";
// import { UserState, saveUser } from "../../redux/slice/user-slice";
// import { loginUser } from "../../redux/slice/auth-slice";

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
      <div className="bg-white text-gray-600 mx-10 my-60 px-7 text-6xl justify-center items-center capitalize font-bold flex flex-col w-50 ">
        <h1 className=" ">Boost your business traffic & sales</h1>
        <p className="text-lg my-4 text-green-200">
          Marketing experts are ready to help you
        </p>
      </div>
      <div className="bg-green-200 text-gray-600 py-40   justify-center items-center capitalize mt-10   ">
        <h3 className="text-2xl mb-6 mt-6 justify-center items-center flex flex-1  font-bold">
          Our Features
        </h3>
        <div className="flex justify-center   ">
          <div className="mr-10 text-gray-600 font-semibold  bg-white py-20 px-5 shadow-2xl rounded-2xl w-30 justify-center items-center hover:-translate-y-6">
            <h2 className=" justify-center items-center flex">
              {" "}
              Online presence creator
            </h2>
            <p className="text-sm py-30 mt-8 text-green-200">
              This package is designed for businesses <br />
              about to lauch into the Digital space. <br />
              It covers all you need.
            </p>
            <hr className="mt-20" />
            <button className="mt-20  bg-green-200 text-black rounded-2xl p-4 hover:bg-white ">
              Learn More
            </button>
          </div>
          <div className="mr-10 text-gray-600 font-semibold  bg-white py-20 px-5 shadow-2xl rounded-2xl w-30 hover:-translate-y-6">
            <h2 className=" justify-center items-center flex">
              {" "}
              Online business booster
            </h2>
            <p className="text-sm py-30 mt-8 text-green-200">
              Have a business online butneed to boost <br /> your traffic and
              hit your sale numbers,
              <br /> then this offer <br />
              is designed for you.
            </p>
            <hr className="mt-10" />
            <button className="mt-20  bg-green-200 text-black rounded-2xl p-4 hover:bg-white ">
              Learn More
            </button>
          </div>
          <div className="mr-10 text-gray-600 font-semibold  bg-white py-20 px-5 shadow-2xl rounded-2xl w-30 hover:-translate-y-6">
            <h2 className=" justify-center items-center flex">
              {" "}
              Online business optimizer
            </h2>
            <p className="text-sm py-30 mt-8 text-green-200">
              {" "}
              Optimizing your business yields a proven <br />
              40% surge in organic traffic and sales.
              <br />
              Spend less on ads by optimizing today.
            </p>
            <hr className="mt-10" />
            <button className="mt-20 bg-green-200 text-black rounded-2xl p-4 hover:bg-white ">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <footer className=" bg-green-400 pt-20 pl-10 pb-9">
        <div className=" f">
          <div className="flex justify-center    ">
            <div className="mr-20 text-gray-600 font-semibold hover:text-black cursor-pointer ">
              <p>Home</p>
            </div>
            <div className="mr-20 text-gray-600 font-semibold hover:text-black cursor-pointer">
              <p>Privacy</p>
            </div>
            <div className="mr-20 text-gray-600 font-semibold hover:text-black cursor-pointer">
              <p>Terms</p>
            </div>
            <div className="mr-20 text-gray-600 font-semibold hover:text-black cursor-pointer">
              <p>
                <span>
                  <i className="fa fa-copyright" aria-hidden="true"></i>
                </span>
                All right reserved
              </p>
            </div>
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
