/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Главная",
      icon: <HomeIcon />,
      link: "#home"
    },
    {
      text: "О нас",
      icon: <InfoIcon />,
      link: "#about"
    },
    {
      text: "Каталог",
      icon: <CommentRoundedIcon />,
      link: "#catalog"
    },
    {
      text: "Контакты",
      icon: <PhoneRoundedIcon />,
      link: "#contact"
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <span className="nav-logo">ИП ZHASA</span>
      </div>
      <div className="navbar-links-container">
        <a href="#home">Главная</a>
        <a href="#about">О нас</a>
        <a href="#catalog">Каталог</a>
        <a href="#contact">Контакты</a>
        <a
          href="https://wa.me/77057072288"
          className="primary-button"
          target="_blank"
        >
          Написать нам
        </a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component='a' href={item.link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
