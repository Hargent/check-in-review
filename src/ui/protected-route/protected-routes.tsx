import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Loader from "../loader";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // const { isGettingUser, isAuthenticated } = useGetUser();
  const navigate = useNavigate();
  const isGettingUser = false;
  const isAuthenticated = false;
  useEffect(() => {
    if (!isAuthenticated && !isGettingUser) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [isAuthenticated, isGettingUser, navigate]);
  if (isGettingUser) {
    return <Loader />;
  }

  if (isAuthenticated) return children;
};
export default ProtectedRoute;
