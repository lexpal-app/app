import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PlayCircleFilledTwoToneIcon from "@mui/icons-material/PlayCircleFilledTwoTone";
import HelpTwoToneIcon from "@mui/icons-material/HelpTwoTone";
import InputTwoToneIcon from "@mui/icons-material/InputTwoTone";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import InputIcon from "@mui/icons-material/Input";
import { BsAwardFill } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <HomeIcon />,
    link: "/dashboard",
  },
  {
    title: "Set New Meeting",
    icon: <GroupTwoToneIcon />,
    link: "/newmeeting",
  },
  {
    title: "Statistics",
    icon: <EqualizerIcon />,
    link: "/statistics",
  },
  {
    title: "Achievements",
    icon: <BsAwardFill />,
    link: "/achievements",
  },
  {
    title: "Tutorial",
    icon: <PlayCircleFilledTwoToneIcon />,
    link: "/tutorial",
  },
  {
    title: "Help",
    icon: <HelpTwoToneIcon />,
    link: "/help",
  },
  {
    title: "Log Out",
    icon: <ExitToAppTwoToneIcon />,
    link: "/logout",
  },
];
