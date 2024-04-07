import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import { HiInboxIn } from "react-icons/hi";
import { HiViewList } from "react-icons/hi";
import { HiLogout } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";

export const LeftSideBarLinks = [
  {
    id: 1,
    icon: HiOutlineHome,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    icon: HiOutlineSearch,
    title: "Explore",
    href: "/explore",
  },
  {
    id: 3,
    icon: HiOutlineBell,
    title: "Notification",
    href: "/notication",
  },
  {
    id: 5,
    icon: HiInboxIn,
    title: "Messages",
    href: "/messages",
  },

  {
    id: 6,
    icon: HiViewList,
    title: "List",
    href: "/list",
  },
  {
    id: 7,
    icon: HiOutlineUser,
    title: "Profile",
    href: "/profile",
  },
  {
    id: 8,
    icon: HiLogout,
    title: "Logout",
    href: "/logout",
  },
];
