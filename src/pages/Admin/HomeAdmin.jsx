import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AccountUser from "./Options/Enterprises/AccountUser";
import Booking from "./Options/Book/Booking";
import Campaign from "./Options/Campaign/Campaign";
import ListCombo from "./Options/Combo/ListCombo";
import OutStanding from "./Options/OutStanding/OutStanding";
import CreateCombo from "./Options/Combo/CreateCombo";
import Fields from "./Options/Fields/Fields"
import NotAdmin from "../NotFound/NotAdmin";

import { Layout, Menu, Button } from "antd";
import classes from './HomeAdmin.module.css'
import AccountKOL from './Options/Kols/AccountKOL';
import Statistical from "./Options/Statistical/Statistical";
import Title from "antd/es/typography/Title";
import RequestPGT from "./Options/RequestKOL/RequestPGT";


const { Sider } = Layout;

const HomeAdmin = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key);
  };

  const logoutHandler = () => {
    // localStorage.removeItem("user");
    // localStorage.removeItem("accessToken");
    // localStorage.removeItem("refreshToken");
    // navigate("../login");
  }

  return (
    <>
      <Layout theme="light" style={{ height: '100vh' }} >
        <Sider theme="light"
          style={{ width: 200 }}
        >
          <Menu
            theme="light"
            style={{ width: 200 }}
            selectedKeys={[selectedMenuItem]}
            onClick={handleMenuClick}
            mode="inline"
          >
            <Title level={3}>
              <span style={{ marginLeft: 10, color: '#111' }} >Account Name </span>
            </Title>
            <Menu.SubMenu className="submenu" key="sub1" title="Tài Khoản">
              {/* <Menu.Item key="1">Enterprises</Menu.Item> */}
              <Menu.Item key="1">Người dùng</Menu.Item>
              <Menu.Item key="2">PGT</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="4">Quản lý lượt thuê</Menu.Item>
            {/* <Menu.SubMenu className="submenu" key="sub2" title="Combo">
              <Menu.Item key="3">Danh Sách Combo</Menu.Item>
              <Menu.Item key="4">Tạo Combo</Menu.Item>
            </Menu.SubMenu> */}
            {/* <Menu.Item key="5">Chiến Dịch</Menu.Item> */}
            <Menu.Item key="7">Nổi Bật</Menu.Item>
            <Menu.Item key="8">Lĩnh vực </Menu.Item>
            <Menu.Item key="9">Yêu cầu PGT</Menu.Item>
            <Menu.Item key="10">Thống kê</Menu.Item>
            <Button
              onClick={logoutHandler}
              className={classes['btn-logout']}
            >Đăng xuất</Button>
          </Menu>

        </Sider>

        <Layout className={classes['container']}>
          <Layout.Content className={classes["site-layout-content"]}>
            {selectedMenuItem === "1" && <AccountUser />}
            {selectedMenuItem === "2" && <AccountKOL />}
            {selectedMenuItem === "3" && <OutStanding />}
            {selectedMenuItem === "4" && <Booking />}
            {/* {selectedMenuItem === "4" && <CreateCombo />} */}
            {/* {selectedMenuItem === "5" && <Campaign />} */}
            {selectedMenuItem === "7" && <ListCombo />}
            {selectedMenuItem === "8" && <Fields />}
            {selectedMenuItem === "9" && <RequestPGT />}
            {selectedMenuItem === "10" && <Statistical />}
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  );
};

export default HomeAdmin;
