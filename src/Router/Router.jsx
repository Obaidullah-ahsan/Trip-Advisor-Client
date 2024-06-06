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
import Dashboard from "../Layouts/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import MyWishlist from "../Pages/Dashboard/MyWishlist/MyWishlist";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AddPackage from "../Pages/Dashboard/AddPackage/AddPackage";
import DashboardGuideProfile from "../Pages/Dashboard/DashboardGuideProfile/DashboardGuideProfile";
import GuideAssignedTours from "../Pages/Dashboard/GuideAssignedTours/GuideAssignedTours";
import PrivateRoutes from "../Routes/PrivateRoutes";
import StoryDetails from "../Pages/StoryDetails/StoryDetails";
import AllStory from "../Pages/AllStory/AllStory";

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
      {
        path: "/allstories",
        element: <AllStory></AllStory>,
      },
      {
        path: "/storydetails/:id",
        element: <StoryDetails></StoryDetails>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      // Tourist Routes
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "bookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "myWishlist",
        element: <MyWishlist></MyWishlist>,
      },

      // Admin Routes
      {
        path: "adminProfile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "addPackage",
        element: <AddPackage></AddPackage>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },

      // Guide Routes
      {
        path: "guideProfile",
        element: <DashboardGuideProfile></DashboardGuideProfile>,
      },
      {
        path: "guideAssignedTours",
        element: <GuideAssignedTours></GuideAssignedTours>,
      },
    ],
  },
]);

export default router;
