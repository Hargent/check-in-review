import { Navigate, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../ui/protected-route/protected-routes";
import AppLayout from "../ui/app-layout/app-layout";
import PageNotFound from "../ui/page-not-found/page-not-found";
import Home from "../ui/home";
import Questions from "../ui/questions";
import DashBoard from "../ui/dashboard";
import Loader from "../ui/loader";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Navigate replace to="dashboard" />
      },
      {
        path: "dashboard",
        element: <DashBoard />
      },

      {
        path: "review",
        element: <Questions />
      }
    ]
  },
  {
    path: "home",
    element: <Home />,
    loader: Loader,
    errorElement: <PageNotFound />
  }
]);
export default Routes;
