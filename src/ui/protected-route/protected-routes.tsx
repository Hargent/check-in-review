import Loader from "../loader";
import { useAppSelector } from "../../shared/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../services/hooks/user";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { fetchedUser, fetchingUser } = useUser();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) return;
    window.location.replace("/");
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  if (fetchingUser) {
    return <Loader />;
  }

  if (!fetchedUser) {
    navigate("/");
    // window.location.replace("/");
  } else {
    return children;
  }
};
export default ProtectedRoute;
