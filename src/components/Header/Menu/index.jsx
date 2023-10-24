import { Modal, Tabs, Tooltip } from "antd";
import no1_top_frame from '../../../assets/images/no1_top_frame.png'
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './styleModal.scss'
import Temp from "../../../utils/temp";
import { convertStringToNumber } from "../../../utils/Utils";


const ItemTrend = (props) => {
  return (
    <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
      <div className="pull-left">
        <div className="rank-stt"> {props?.stt} </div>
        <div className="avt-rank">
          <img src={props?.avatar} />
        </div>
        <div className="name-player">
          {props?.userName}
        </div>
      </div>
      <div className="pull-right">
        <span> {convertStringToNumber(props?.money)} </span>
      </div>
    </li>
  );
};

const MenuGuest = ({ icons }) => {
  const [user, setUser] = useState();
  const [isShowModal, setIsShowModal] = useState();
  const TodayList = Temp.Trendtoday;
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  function showModelTrenđ() {
    setIsShowModal(true);
  }

  const item =
    [
      {
        label: 'Hôm nay',
        key: 1,
        children:
          <div className="tab-content">
            <div className="top-info-section">
              <div className="top-1-frame">
                <img className="imgTop1" src={TodayList[0]?.avatar} />
                <img className="imgTop1Frame" src={no1_top_frame} />
              </div>
              <span className="moneyTop1">{convertStringToNumber(TodayList[0]?.money)} </span>
            </div>
            <div className="rank-list">
              {TodayList?.map((item) => (
                <ItemTrend
                  key={item?.stt}
                  stt={item?.stt}
                  avatar={item?.avatar}
                  userName={item?.userName}
                  money={item?.money}
                />
              ))
              }
            </div>
          </div >
      },
      {
        label: '7 ngày qua',
        key: 2,
        children:
          <div className="tab-content">
            <div className="top-info-section">
              <div className="top-1-frame">
                <img className="imgTop1" src={TodayList[0]?.avatar} />
                <img className="imgTop1Frame" src={no1_top_frame} />
              </div>
              <span className="moneyTop1">{convertStringToNumber(TodayList[0]?.money)} </span>
            </div>
            <div className="rank-list">
              {TodayList?.map((item) => (
                <ItemTrend
                  key={item?.stt}
                  stt={item?.stt}
                  avatar={item?.avatar}
                  userName={item?.userName}
                  money={item?.money}
                />
              ))
              }
            </div>
          </div >
      },
      {
        label: '30 ngày qua',
        key: 3,
        children:
          <div className="tab-content">
            <div className="top-info-section">
              <div className="top-1-frame">
                <img className="imgTop1" src={TodayList[0]?.avatar} />
                <img className="imgTop1Frame" src={no1_top_frame} />
              </div>
              <span className="moneyTop1">{convertStringToNumber(TodayList[0]?.money)} </span>
            </div>
            <div className="rank-list">
              {TodayList?.map((item) => (
                <ItemTrend
                  key={item?.stt}
                  stt={item?.stt}
                  avatar={item?.avatar}
                  userName={item?.userName}
                  money={item?.money}
                />
              ))
              }
            </div>
          </div >
      }
    ]

  return (
    <>
      <Modal
        centered
        open={isShowModal}
        onOk={() => setIsShowModal(false)}
        onCancel={() => setIsShowModal(false)}
        width={800}
      >
        <>
          <h1 className="titleModal">BẢNG XẾP HẠNG ĐẠI GIA</h1>
          <Tabs
            defaultActiveKey="1"
            centered
            items={item}
          />
        </>
      </Modal>
      <ul className="room-guest">

        <li className="icon-room-guest">
          <Tooltip title="Trang chủ" >
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <img src={icons[0]} alt="" />
            </NavLink>
          </Tooltip>

        </li>
        <li className="icon-room-guest">
          <Tooltip title="Bảng xếp hạng" >
            <NavLink
              onClick={showModelTrenđ}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <img src={icons[1]} alt="" />
            </NavLink>
          </Tooltip>
        </li>
        {user && (
          <li className="icon-room-guest">
            <Tooltip title="Nhắn tin" >
              <NavLink
                to="/chat/:id"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                <img src={icons[2]} alt="" />
              </NavLink>
            </Tooltip>
          </li>
        )}
      </ul>
    </>

  );
};

export default MenuGuest;
