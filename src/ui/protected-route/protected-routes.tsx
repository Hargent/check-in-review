import { UserState, saveUser } from "../../redux/slice/user-slice";

import Loader from "../loader";
import { loginUser } from "../../redux/slice/auth-slice";
import { redirect } from "react-router-dom";
import { useAppDispatch } from "../../shared/hooks";
import { useEffect } from "react";
import { useUser } from "../../services/hooks/user";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, userError, fetchedUser, fetchingUser } = useUser();

  const dispatch = useAppDispatch();
  // const isGettingUser = false;
  // const isAuthenticated = false;
  useEffect(() => {
    if (userError) {
      redirect("/home");
    } else {
      redirect("/");
    }
  }, [userError]);
  if (fetchingUser) {
    return <Loader />;
  }

  if (fetchedUser && user) {
    console.log("====================================");
    console.log(user.data);
    console.log("====================================");
    dispatch(saveUser({ ...user.data } as UserState));
    dispatch(loginUser());
    return children;
  }
};
export default ProtectedRoute;
