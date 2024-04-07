import Home from "../components/Home";
import Explore from "../pages/Explore";
import Messages from "../pages/Messages";
import Notification from "../pages/Notification";
import List from "../pages/List";
import Profile from "../pages/Profile";
import Logout from "../pages/Logout";

export const RoutesLinks = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/explore",
    element: Explore,
  },
  {
    path: "/notification",
    element: Notification,
  },
  {
    path: "/messages",
    element: Messages,
  },
  {
    path: "/list",
    element: List,
  },
  {
    path: "/profile",
    element: Profile,
  },
  {
    path: "/logout",
    element: Logout,
  },
];
