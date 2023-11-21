import { Button, Modal } from "antd";
import classes from "./Notification.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BookingDetail from "../../pages/Booking/BookingDetail";

export default function NotiItem({ noti, onClickBookingId = () => { } }) {
  const [daysPassed, setDaysPassed] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const calculateDaysPassed = () => {
      const currentTimestamp = Math.floor(new Date().getTime() / 1000);
      const createdAtTimestamp = noti?.createdAt.seconds;
      const secondsDifference = currentTimestamp - createdAtTimestamp;
      const daysDifference = Math.floor(secondsDifference / (24 * 60 * 60));
      setDaysPassed(daysDifference);
    };
    calculateDaysPassed();
  }, [noti]);

  const daysText = (daysPassed) => {
    if (daysPassed === 0) return "Hôm nay";
    if (daysPassed === 1) return "Hôm qua";
    if (daysPassed <= 7) return `${daysPassed} ngày trước`;
    if (daysPassed > 7) return `${Math.floor(daysPassed / 7)} tuần trước`;
  };

  const handleClickBookingDetail = () => {
    onClickBookingId(noti?.action_id);
  };

  function handleNavigate() {
    // navigate(`/chat/${noti?.userId}`);
    navigate(`/chat/1`);
    // window.location.replace(`/chat/${id}`)
  }

  function showModalFeedback() {
    onClickBookingId(noti?.action_id,true)
  }

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("../login");
  }
  return (
    <div className={`${classes["item-wrap"]}  ${!noti?.read && classes["read"]} `}>
      <div className={`${classes["item-content"]}`}  >
        <span className={classes.titleNoti}>{noti?.title}</span>
        <span className={classes.body} >{noti?.body}</span>
        <span style={{ color: '#0866FF', fontWeight: '600', fontSize: 12 }}>{daysText(daysPassed)}</span>
      </div>
      <div
        className={classes["item-btn"]}
      >
        {(noti?.type === 1 || noti?.type === 2) && <>
          <Button type='default' onClick={handleNavigate}>
            Nhắn  tin ngay
          </Button>
          <Button type='primary' onClick={handleClickBookingDetail}>
            Xem thông tin
          </Button>
        </>}
        {(noti?.type === 3 || noti?.type === 4) && <>
          <Button type='primary' onClick={logoutHandler}>
            Đăng xuất
          </Button>
        </>}
        {(noti?.type === 5) && <>
          <Button type='primary' onClick={showModalFeedback}>
            Đánh giá
          </Button>
        </>}

      </div>
    </div >
  );
}
