import React, { useState, useEffect, useRef } from "react";

import DidLogin from "../BtnLogin/DidLogin";

import {
  UserOutlined,
  ToolOutlined,
  PlusCircleOutlined,
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
  CheckCircleTwoTone,
  ProfileOutlined,
  WifiOutlined,
  RightSquareOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { Link } from "react-router-dom";

import { getKols } from "../../services/KolService";
import { getEnts } from "../../services/EnterpriseService";
import useOnClickOutside from "../../hook/use-onclick-outside";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const NavBar = (props) => {
  const user = JSON.parse(localStorage.getItem("user"))
  const [kol, setKol] = useState([])
  const [ent, setEnt] = useState([])
  const [isOnline, setIsOnline] = useState(true);

  function handleChangeStatusOn() {
    setIsOnline(true);
    console.log('heheh11');

  }
  function handleChangeStatusOff() {
    setIsOnline(false);
    console.log('heheh');
  }
  useEffect(() => {
    if (user.role === "PGT") {
      // getKols().then((res) => setKol(res.find((kol) => kol.userId === user.id)))
    }
    if (user.role === "ENTERPRISE") {
      // getEnts().then((res) => setEnt(res.find((ent) => ent.userId === user.id)))
    }
  }, [])
  const dropRef = useRef();
  useOnClickOutside(dropRef, handleClickOutside);

  function handleClickOutside() {
    props.onchangeOpen(false);
  }

  let items2 = [
    getItem(
      <>
        <Link style={{}} to={`../user-home`}>
          Trang cá nhân
        </Link>
      </>
      , '1',
      <ProfileOutlined />
    ),
    getItem(
      <>
        <Link style={{}} to="/setting" >
          Quản lý tài khoản
        </Link>
      </>
      , '2',
      <UserOutlined />
    ),
    getItem('Thay đổi trạng thái', '3', <WifiOutlined />, [
      getItem(
        <div className="dropdownProfile" onClick={handleChangeStatusOn}>
          <span> Đang làm việc</span>
          {isOnline &&
            <CheckCircleTwoTone />
          }
        </div>
        , '4',),
      getItem(
        <div className="dropdownProfile" onClick={handleChangeStatusOff}>
          <span> Đang tạm nghỉ</span>
          {!isOnline &&
            <CheckCircleTwoTone />
          }
        </div>
        , '5',),
    ]),
  ];

  if (user?.role === 1) {
    items2 = items2.concat(
      getItem(
        <>
          <Link style={{}} to={'/registet-pgt'}>
            Đăng ký làm PGT
          </Link>
        </>,
        '2',
        <RightSquareOutlined />
      )
    );
    items2 = items2.concat(
      getItem(
        <>
          <Link style={{}} onClick={props.logOutHandler}>
            Đăng xuất
          </Link>
        </>,
        '2',
        <RightSquareOutlined />
      )
    );
  }
  else {
    items2 = items2.concat(
      getItem(
        <>
          <Link style={{}} to='/setting'>
            Quản lý booking
          </Link>
        </>,
        '2',
        <RightSquareOutlined />
      )
    );
    items2 = items2.concat(
      getItem(
        <>
          <Link style={{}} onClick={props.logOutHandler}>
            Đăng xuất
          </Link>
        </>,
        '2',
        <RightSquareOutlined />
      )
    );
  }
  return (
    <>
      {props?.isOpen &&
        <div >
          <Menu
            style={{
              width: 256,
              position: 'absolute',
              top: 60,
              right: 20
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            items={items2}
            onClick={props.onchangeOpen}
          />
        </div>
      }
    </>
  );
};

export default NavBar;
