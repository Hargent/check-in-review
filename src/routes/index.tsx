import { Navigate, createBrowserRouter } from "react-router-dom";

import AppLayout from "../ui/app-layout/app-layout";
import DashBoard from "../pages/dashboard";
import Home from "../pages/home";
import Loader from "../ui/loader";
import PageNotFound from "../ui/page-not-found/page-not-found";
import ProtectedRoute from "../ui/protected-route/protected-routes";
import ResultsPage from "../pages/results";
import Reviews from "../pages/review";

const Routes = createBrowserRouter([
  {
    path: "/app",
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
        element: <Reviews />
      },
      {
        path: "results",
        element: <ResultsPage />
      }
    ]
  },
  {
    path: "/",
    element: <Home />,
    loader: Loader,
    errorElement: <PageNotFound />
  }
]);
export default Routes;
