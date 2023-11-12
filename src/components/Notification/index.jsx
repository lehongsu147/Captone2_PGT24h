import { BellOutlined } from "@ant-design/icons";
import classes from "./Notification.module.css";
import { useEffect, useState } from "react";
import NotiItem from "./NotiItem";
import { useContext } from "react";
import { convertStringToDateTime } from "../../services/DateTimeUtil";
import { NotificationContext } from '../../context/Notification.context';
import { db } from "../../firebase";
import {  collection, getDocs, query, where, writeBatch } from "firebase/firestore";

export default function Notification(props) {
  const { countNotification } = props
  const { notifications, } = useContext(NotificationContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const [isActive, setIsActive] = useState(false);
  const [tab, setTab] = useState(true);

  const handlerActive = () => {
    setIsActive(!isActive);
  };
  const changeTab = () => {
    setTab(!tab);
  };

  const sortedNotifications = (array) =>
    array.sort(
      (a, b) =>
        convertStringToDateTime(b.timestamp).getTime() -
        convertStringToDateTime(a.timestamp).getTime()
    );


  const updateAllNotificationsToRead = async (userId) => {
    const notificationsQuery = query(
      collection(db, "notifications"),
      where("toUserId", "==", parseInt(userId)), // Use the passed userId parameter
      where("read", "==", false)
    );

    try {
      const querySnapshot = await getDocs(notificationsQuery);
      const batch = writeBatch(db);

      querySnapshot.forEach((doc) => {
        batch.update(doc.ref, { read: true });
      });
      await batch.commit();
    } catch (e) {
      console.error("Lỗi khi cập nhật thông báo đã đọc: ", e);
    }
  };

  useEffect(() => {
    if (isActive === true && countNotification > 0) {
      updateAllNotificationsToRead(user?.id);
    }
  }, [isActive, countNotification])

  return (
    <>
      <div
        className={`${classes["noti-button"]} ${isActive ? classes["active"] : ""}`}
        onClick={handlerActive}
      >
        <BellOutlined className={classes["icon-noti"]} />
      </div>
      {isActive && (
        <div className={classes["noti-list"]}>
          <h4>Thông báo</h4>
          <div className={classes["noti-main"]} >
            {notifications?.length === 0 && (<>   <p className={classes["noti-mgs"]}>Không có thông báo</p>   </>)}
            {notifications?.length > 0 && (<>
              {notifications?.map((noti, index) => (
                <NotiItem key={index} noti={noti} />
              ))}
            </>)}
          </div>
        </div>)
      }
    </>
  );
}
