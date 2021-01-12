import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    // Overview
    title: "Overview",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconCLosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    // Reports
    title: "Reports",
    path: "/reports",
    icon: <AiIcons.AiFillHome />,
    iconCLosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Reports",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Reports 2",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Reports 3",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClose: <RiIcons.RiArrowDownFill />,
    iconClose: <RiIcons.RiArrowUpFill />,

    subNav: [
      {
        title: "Messages 1",
        path: "/messages1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Messages 2",
        path: "/messages2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
