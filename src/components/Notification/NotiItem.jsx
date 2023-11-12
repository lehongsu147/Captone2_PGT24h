import { Avatar, Button } from "antd";

import classes from "./Notification.module.css";
import { updateNotificationStatus } from "../../services/NotificationService";
import { useNavigate } from "react-router-dom";
import { calculateDaysAgo } from "../../services/DateTimeUtil";
import { useEffect, useState } from "react";
import BookingDetail from "../../pages/Booking/BookingDetail";

export default function NotiItem({ noti }) {
  const [daysPassed, setDaysPassed] = useState(null);
  const [open, setOpen] = useState(false);
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
    setOpen(true);
  };

  function handleNavigate() {
    // navigate(`/chat/${noti?.userId}`);
    navigate(`/chat/1`);
    // window.location.replace(`/chat/${id}`)
  }

  const onCancelOpenHandler = () => {
    setOpen(false);
  };

  return (
    <div className={classes["item-wrap"]} >
      <div className={`${classes["item-content"]} ${!noti?.read && classes["read"]}`}  >
        <p className={classes.titleNoti}>{noti?.title}</p>
        <p>{noti?.body}</p>
        <p>{daysText(daysPassed)}</p>
        <div
          className={classes["item-btn"]}
        >
          <Button type='default' onClick={handleNavigate}>
            Nhắn  tin ngay
          </Button>
          <Button type='primary' onClick={handleClickBookingDetail}>
            Xem thông tin
          </Button>
        </div>
      </div>
      {open &&
        <BookingDetail
          bookingId={noti?.action_id}
          onCancelOpenHandler={onCancelOpenHandler}
          open={open}
        />
      }
    </div>
  );
}
