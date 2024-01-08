import { UserState, saveUser } from "../../redux/slice/user-slice";

import Loader from "../loader";
import { loginUser } from "../../redux/slice/auth-slice";
import { useAppDispatch } from "../../shared/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../services/hooks/user";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, userError, fetchedUser, fetchingUser } = useUser();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const isGettingUser = false;
  // const isAuthenticated = false;

  console.log("====================================");
  console.log(fetchedUser, fetchingUser, userError);
  console.log("====================================");
  useEffect(() => {
    if (!fetchedUser) {
      navigate("/home", { replace: true });
    } else {
      navigate("/dashboard", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedUser]);
  if (fetchingUser) {
    return <Loader />;
  }

  // if (fetchedUser && user) {

  if (fetchedUser) {
    dispatch(saveUser({ ...user?.data } as UserState));
    dispatch(loginUser());
    return children;
  } else {
    navigate("/home", { replace: true });
  }
};
export default ProtectedRoute;
