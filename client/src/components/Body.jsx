import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Logout from "../pages/Logout";
import Home from "./Home";
import Feed from "./Feed";
import Profile from "../pages/Profile";
import Explore from "../pages/Explore";
import Notification from "../pages/Notification";
import Messages from "../pages/Messages";
import List from "../pages/List";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <Feed /> },
        { path: "/explore", element: <Explore /> },
        { path: "/notification", element: <Notification /> },
        { path: "/messages", element: <Messages /> },
        { path: "/list", element: <List /> },
        { path: "/profile", element: <Profile /> },
      ],
    },
    {
      path: "/logout",
      element: <Logout />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
