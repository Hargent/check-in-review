import { UserState, saveUser } from "../../redux/slice/user-slice";

import Loader from "../loader";
import { useAppDispatch } from "../../shared/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../services/hooks/user";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, userError, fetchedUser, fetchingUser } = useUser();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const isGettingUser = false;
  // const isAuthenticated = false;
  useEffect(() => {
    if (userError) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [navigate, userError]);
  if (fetchingUser) {
    return <Loader />;
  }

  if (fetchedUser && user) {
    console.log("====================================");
    console.log(user.data);
    console.log("====================================");
    dispatch(saveUser({ ...user.data } as UserState));
    return children;
  }
};
export default ProtectedRoute;
