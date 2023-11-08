import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import IntroduceKOL from "./IntroduceKOL/IntroduceKOL";
import { getKol } from "../../../services/KolService";
import { AuthContext } from "../../../context/auth.context";
import styles from './HomeDetails.module.scss'
import { CollapseContext } from "../../../context/collapse.context";
import CardType from "../../../components/catgegory/CardType";
import Feedback from "../../../components/Feedback/Feedback";
import { BackTop, Button, Image, Pagination, Tabs } from 'antd';
import Avatar from "../../../components/Avatar/Avatar";
import StarRating from "../../../components/start-rating/StarRating";
import BookingCreate from "../../Booking/BookingCreate";
import Temp from "../../../utils/temp";

const PageKOLDetail = () => {
  const { user, setUser } = useContext(AuthContext);

  const { id } = useParams();
  const [kolInfo, setKolInfo] = useState();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const { isCollapse } = useContext(CollapseContext);

  const onCancelOpenHandler = () => {
    setOpen(false);
  };


  useEffect(() => {
    setKolInfo(Temp.UserPGT );
    // getKol(id).then((res) => {
    //   // setKol(res);

    //   checkStatus(res.bookings, user, res.kol);
    //   console.log(res);
    // });
  }, []);

  useEffect(() => {
    if (kolInfo) {
      document.title = `PGT24h | ${kolInfo?.firstName} ${kolInfo?.lastName}`;
    }
    return () => {
      document.title = "PGT24h";
    };
  }, [kolInfo?.id]);

  const checkStatus = (bookings, user, kol) => {
    if (!user) {
      setStatus("GUEST");
    } else if (kol.userId === user.id) {
      setStatus("ME");
    } else if (
      bookings.findIndex(
        (booking) => booking.user.id === user.id && booking.status === "PENDING"
      ) !== -1
    ) {
      setStatus("PENDING");
    } else if (
      bookings.findIndex(
        (booking) =>
          booking.user.id === user.id && booking.status === "ACCEPTED"
      ) !== -1
    ) {
      setStatus("ACCEPTED");
    } else setStatus("BOOK");
  };

  const navigateToChat = () => {
    navigate(`/chat`, { state: kolInfo.kol });
  };

  const bookingHandler = () => {
    if ( !user ){
      navigate('/login');
    }
    setOpen(true);
  };
  const hanleClickChat = () => {
    navigate(`/chat/${id}`)
  };

  const onChange = (key) => {
    console.log(key);
  };

  const onRedirect = () => {
    const booking = kolInfo.bookings.find(
      (booking) => booking.status === status && booking.user.id === user.id
    );
    if (booking) {
      navigate(`/bookings/${booking.id}`);
    }
  };

  const renderCategopryGame = () => {
    return (
      <>
        {Temp?.GameList?.map((item, index) => (
          <CardType
            key={index}
            id={item.id}
            name={item.name}
            background={item.background}
          />
        ))}
      </>
    )
  };

  const renderFeedBack = () => {
    const onShowSizeChange = (current, pageSize) => {
      console.log(current, pageSize);
    };
    const handleChange = (e) => {
      console.log(e)
    }
    return (
      <>
        {Temp?.FeedBack?.map((item, index) => (
          <Feedback
            key={index}
            avatar={item?.avatar}
            userName={item?.userName}
            comment={item?.comment}
            star={item?.star}
            date={item?.date}
            timeRental={item?.timeRental}
            time={item?.time}
          />
        ))}

        <div className={styles.boxPagination} >
          <Pagination
            showSizeChanger
            // onShowSizeChange={onShowSizeChange}
            defaultCurrent={10}
            onChange={(e) => handleChange(e)}
            total={100}
          // responsive
          />
        </div>
      </>
    )
  };

  const items = [
    {
      key: '1',
      label: 'Giới thiệu',
      children: <IntroduceKOL introduction={kolInfo?.introduction} />,
    },
    {
      key: '2',
      label: 'Đánh giá',
      children: renderFeedBack(),
    },
  ];


  return (
    <>
      <main className={styles["main-details"]} >
        {kolInfo && (
          <BookingCreate
            kol={kolInfo}
            onCancelOpenHandler={onCancelOpenHandler}
            open={open}
          />
        )}
        <div
          className={`${styles["container"]} ${styles[isCollapse ? "isCollapse" : '']}  `}
        >

          <div className={styles.profile}>
            <div className={styles.stickyProfile}>
              <div className={styles.profileContainer}>
                <Avatar
                  avatar={kolInfo?.avatar ?? ''}
                  photoList={kolInfo?.photoList ?? ''}
                />
              </div>

              <div className={styles.statusInfo}>
                <div className={` ${styles.boxStatus} ${styles.Pause}   `} >
                  <div className={` ${styles.textStatus} ${styles.Pause}  `} >
                    Đang làm việc
                  </div>
                </div>
                <span className={styles.dateFrom}>Ngay tham gia: 22/06/2004</span>
              </div>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.profileInfo}>
              <div className={styles.title}>
                <span className={` ${styles.userName}  `} >{kolInfo?.firstName} {kolInfo?.lastName}  </span>
                <buton className={` ${styles.buttonFollow}  `} >Theo dõi </buton>
              </div>

              <div className={styles.properties}>
                <div className={styles.boxPropertie}>
                  <span className={styles.namePropertie}>
                    SỐ NGƯỜI THEO DÕI
                  </span>
                  <span className={styles.number}>
                    628 người
                  </span>
                </div>

                <div className={styles.boxPropertie}>
                  <span className={styles.namePropertie}>
                    ĐÃ ĐƯỢC THUÊ
                  </span>
                  <span className={styles.number}>
                    628 người
                  </span>
                </div>

                <div className={styles.boxPropertie}>
                  <span className={styles.namePropertie}>
                    TỶ LỆ HOÀN THÀNH
                  </span>
                  <span className={styles.number}>
                    87.85 %
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.category}>
              {renderCategopryGame()}
            </div>

            <div className={styles.infomation}>
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>

          </div>

          <div className={styles.contact}>
            <div className={styles.stickyBox}>
              <div className={styles.boxContainer}>
                <p>99,000 đ/h</p>
                <div className={styles['rateting-style']}>
                  <StarRating starCount={4} />
                  <span> 67 Đánh giá</span>
                </div>
                <div className={styles['text-center']}>
                  <Button type="primary" size={'large'} onClick={bookingHandler} block danger>
                    Thuê
                  </Button>
                  <Button type="primary" size={'large'} onClick={hanleClickChat} block  >
                    Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <BackTop />
      </main >
    </>
  );
};
export default PageKOLDetail;
