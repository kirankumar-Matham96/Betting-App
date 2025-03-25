import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeFilled, BorderOuterOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useSelector } from "react-redux";
import { authSelector } from "../redux/authSlice";
const items = [
  {
    label: "Home",
    key: "/",
    icon: <HomeFilled />,
  },
  {
    label: "Games",
    key: "/games",
    icon: <BorderOuterOutlined />,
  },
];
const Navbar = () => {
  const { isAisAuthenticated } = useSelector(authSelector);
  const navigate = useNavigate();
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    if (e.key !== "/" && !isAisAuthenticated) {
      navigate("login");
    }

    navigate(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Navbar;
