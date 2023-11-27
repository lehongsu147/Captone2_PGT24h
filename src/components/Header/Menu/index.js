import { Modal, Tabs, Tooltip } from "antd";
import no1_top_frame from '../../../assets/images/no1_top_frame.png'
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './styleModal.scss'
import Temp from "../../../utils/temp";
import { ToastNotiError, convertStringToNumber } from "../../../utils/Utils";
import BookingFactories from '../../../services/BookingFactories';


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
        <span> {(props?.time)} giờ </span>
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

  const [data, setData] = useState();
  const fetchDataTop = async (year, month) => {
    try {
      const response = await BookingFactories.getBookingTopPgt(year, month);
      if (response?.status === 200) {
        const responseData = response?.data
        const labels = responseData.map(item => `${item.user_name}`);
        const totalTime = responseData.map(item => parseInt(item.total_duration_minutes, 10));
        const barData3 = {
          labels: labels,
          datasets: [
            {
              label: "Top PGT",
              backgroundColor: "rgb(255, 99, 132)",
              data: totalTime
            }
          ]
        };
        setData(response?.data);
      }
    } catch (error) {
      ToastNotiError();
    }
  };

  useEffect(() => {
    fetchDataTop(2023, 11);
  }, []);


  const item =
    [
      // {
      //   label: 'Hôm nay',
      //   key: 1,
      //   children:
      //     <div className="tab-content">
      //       <div className="top-info-section">
      //         <div className="top-1-frame">
      //           <img className="imgTop1" src={TodayList[0]?.avatar} />
      //           <img className="imgTop1Frame" src={no1_top_frame} />
      //         </div>
      //         <span className="moneyTop1">{convertStringToNumber(TodayList[0]?.money)} </span>
      //       </div>
      //       <div className="rank-list">
      //         {TodayList?.map((item) => (
      //           <ItemTrend
      //             key={item?.stt}
      //             stt={item?.stt}
      //             avatar={item?.avatar}
      //             userName={item?.userName}
      //             money={item?.money}
      //           />
      //         ))
      //         }
      //       </div>
      //     </div >
      // },
      // {
      //   label: '7 ngày qua',
      //   key: 2,
      //   children:
      //     <div className="tab-content">
      //       <div className="top-info-section">
      //         <div className="top-1-frame">
      //           <img className="imgTop1" src={TodayList[0]?.avatar} />
      //           <img className="imgTop1Frame" src={no1_top_frame} />
      //         </div>
      //         <span className="moneyTop1">{convertStringToNumber(TodayList[0]?.money)} </span>
      //       </div>
      //       <div className="rank-list">
      //         {TodayList?.map((item) => (
      //           <ItemTrend
      //             key={item?.stt}
      //             stt={item?.stt}
      //             avatar={item?.avatar}
      //             userName={item?.userName}
      //             money={item?.money}
      //           />
      //         ))
      //         }
      //       </div>
      //     </div >
      // },
      {
        // label: 'Tháng này',
        label: '',
        key: 3,
        children:
          <div className="tab-content">
            <div className="top-info-section">
              {data?.length > 0 &&
                <>
                  <div className="top-1-frame">
                    <img className="imgTop1" src={data[0].avatar} />
                    <img className="imgTop1Frame" src={no1_top_frame} />
                  </div>
                  <span className="moneyTop1">{parseInt(data[0]?.total_duration_minutes, 10)} phút </span>
                </>
              }
            </div>
            <div className="rank-list">
              {data?.map((item) => (
                <ItemTrend
                  key={item?.stt}
                  stt={item?.stt}
                  avatar={item?.avatar}
                  userName={item?.user_name}
                  time={parseInt(item?.total_duration_minutes, 10)}
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
        footer={[]}
      >
        <>
          <h1 className="titleModal">BẢNG XẾP HẠNG PGT</h1>
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
                to="/chat"
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
