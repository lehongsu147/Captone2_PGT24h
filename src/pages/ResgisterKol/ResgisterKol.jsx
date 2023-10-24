import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../services/DateTimeUtil";
import { createBooking } from "../../services/BookingService";
import { BookingStatus } from "../../utils/Enums";

import styles from "./ResgisterKol.module.css";
import { Card, Avatar, Col, Row, Input, Button } from "antd";
import Constants from "../../utils/constants";
import Meta from "antd/es/card/Meta";
import Temp from "../../utils/temp";
import TextArea from "antd/es/input/TextArea";
import { toast } from "react-toastify";

const ResgisterKol = (props) => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (cardId) => {
    const cardIndex = selectedCards.indexOf(cardId);

    if (cardIndex === -1) {
      setSelectedCards([...selectedCards, cardId]);
    } else {
      const updatedSelectedCards = [...selectedCards];
      updatedSelectedCards.splice(cardIndex, 1);
      setSelectedCards(updatedSelectedCards);
    }
  };
  const navigate =useNavigate();
  function onSubmit(){
    toast.success('Gửi yêu cầu thành công, vui lòng chờ admin xác nhận yêu cầu')
    navigate('/home');
  }
  return (
    <div>
      <main className={styles["main-details"]} >
        <div
          className={`${styles["container"]}  `}
        >
          <h1> Chọn lĩnh vực bạn  muốn tham gia</h1>
          <div className={styles.listCard}>
            <Row>
              {Temp.GameList?.map((item) => (
                <Col span={8}>
                  <Card
                    style={{
                      width: 300,
                      marginTop: 16,
                      border: selectedCards.includes(item.id) ? "2px solid #ff7421" : "none",
                    }}
                    onClick={() => handleCardClick(item.id)}
                  >
                    <Meta
                      avatar={<Avatar src={item?.background} />}
                      title={item?.name}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
          <h1>Thêm lĩnh vực mới</h1>
          <div className={styles.addCategory}>
            <Input placeholder="Nhập tên lĩnh vực" />
            <TextArea placeholder="Giải thích về lĩnh vực mới này ..."/>
          </div>
          <h1>Giá thuê mỗi giờ</h1>
          <div className={styles.addCategory}>
            <Input placeholder="Nhập số tiền" />
          </div>
          <Button type='primary' onClick={onSubmit} className={styles.btnSubmit}>Gửi yêu cầu</Button>
        </div>
      </main>
    </div>
  );
};

export default ResgisterKol;
