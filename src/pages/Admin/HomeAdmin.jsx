import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountUser from "./Options/Enterprises/AccountUser";
import Booking from "./Options/Book/Booking";
import Fields from "./Options/Fields/Fields"
import { Layout, Menu, Button } from "antd";
import classes from './HomeAdmin.module.css'
import AccountPgt from './Options/PGT/AccountPgt';
import Statistical from "./Options/Statistical/Statistical";
import Title from "antd/es/typography/Title";
import RequestPGT from "./Options/RequestPGT/RequestPGT";
import HotPgtAdmin from "./Options/HotPgtAdmin/HotPgtAdmin";
import AccountFactories from "../../services/AccountFactories";
import { ToastNotiError } from "../../utils/Utils";
const { Sider } = Layout;

const HomeAdmin = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key);
  };
  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("../login");
  }

  const [countBooking,setDataCountBooking] = useState([]);
  const fetchApiList = async (value) => {
    try {
      const response = await AccountFactories.getListAccount(value, 30);
      if (response && response.data) {
        setDataCountBooking(response?.data?.length);
      } else {
        ToastNotiError()
      }
    } catch (error) {
      ToastNotiError()
    }
  };
  useEffect(()=>{fetchApiList()},[])
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
              <span style={{ marginLeft: 20, color: '#111' }} >{'ADMIN'} </span>
            </Title>
            <Menu.SubMenu className="submenu" key="sub1" title="Tài Khoản">
              {/* <Menu.Item key="1">Enterprises</Menu.Item> */}
              <Menu.Item key="1">Người dùng</Menu.Item>
              <Menu.Item key="2">PGT</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="3">Quản lý lượt thuê</Menu.Item>
            <Menu.Item key="4">Nổi Bật</Menu.Item>
            <Menu.Item key="5">Lĩnh vực </Menu.Item>
            <Menu.Item key="6">{`Yêu cầu PGT (${countBooking}) `}</Menu.Item>
            <Menu.Item key="7">Thống kê</Menu.Item>
            <Button
              onClick={logoutHandler}
              className={classes['btn-logout']}
            >Đăng xuất</Button>
          </Menu>

        </Sider>

        <Layout className={classes['container']}>
          <Layout.Content className={classes["site-layout-content"]}>
            {selectedMenuItem === "1" && <AccountUser />}
            {selectedMenuItem === "2" && <AccountPgt />}
            {selectedMenuItem === "3" && <Booking />}
            {selectedMenuItem === "4" && <HotPgtAdmin />}
            {selectedMenuItem === "5" && <Fields />}
            {selectedMenuItem === "6" && <RequestPGT onReload={fetchApiList} />}
            {selectedMenuItem === "7" && <Statistical />}
            {/* {selectedMenuItem === "4" && <CreateCombo />} */}
            {/* {selectedMenuItem === "5" && <Campaign />} */}
            {/* {selectedMenuItem === "" && <OutStanding />} */}
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  );
};

export default HomeAdmin;
