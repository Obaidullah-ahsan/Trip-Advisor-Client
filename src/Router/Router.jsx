import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllPackages from "../Pages/AllPackages/AllPackages";
import GuideProfile from "../Pages/GuideProfile/GuideProfile";
import AllReview from "../Components/AllReview/AllReview";
import CategoryBasePackages from "../Pages/CategoryBasePackages/CategoryBasePackages";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allpackages",
        element: <AllPackages></AllPackages>,
      },
      {
        path: "/packagedetails/:id",
        element: <PackageDetails></PackageDetails>,
      },
      {
        path: "/guideProfile/:id",
        element: <GuideProfile></GuideProfile>,
        children: [
          {
            path: "allreview/:email",
            element: <AllReview></AllReview>,
          },
        ],
      },
      {
        path: "/categoryBasePackages/:category",
        element: <CategoryBasePackages></CategoryBasePackages>,
      },
    ],
  },
]);

export default router;
