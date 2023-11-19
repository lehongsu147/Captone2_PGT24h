import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResgisterPgt.module.css";
import { Card, Avatar, Col, Row, Input, Button, InputNumber, Steps } from "antd";
import Meta from "antd/es/card/Meta";
import { Typography } from 'antd';
import { toast } from "react-toastify";
import CategoriesFactories from "../../services/CategoriesFatories";
import AccountFactories from "../../services/AccountFactories";
import { AuthContext } from "../../context/auth.context";
const { Text } = Typography;

const ResgisterPgt = (props) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [categoryList, setCategoryList] = useState()
  const [price, setPrice] = useState()
  const [error, setError] = useState()
  const [step, setStep] = useState(0)
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
  const navigate = useNavigate();
  function navigateHome() {
    navigate('/');
  }
  function handleBackStep() {
    setStep(step - 1)
  }
  function handleNextStep1() {
    setStep(1)
  }
  function handleChangePrice(e) {
    setError();
    setPrice(e)
  }
  function handleNextStep2() {
    if (!price || price === 0 || price === '') {
      setError('Hãy chọn giá thuê')
    }
    else {
      setStep(2)
      onSubmit();
    }
  }
  const { user ,setUser} = useContext(AuthContext);

  async function onSubmit() {
    const data = {
      categories: selectedCards,
      price: price
    }
    const response = await AccountFactories.requestPgt(user?.id, data);
    if (response?.status === 200) {
      toast.success('Gửi yêu cầu thành công, admin đang duyệt yêu cầu của bạn.');
      user.role_id = 4;
      localStorage.setItem("user", JSON.stringify(user));
      const storedUser = localStorage.getItem("user");
      setUser(JSON.parse(storedUser));
    } else {
      toast.error('Hệ thống lỗi');
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      const response = await CategoriesFactories.getListCategories();
      setCategoryList(response);
    };
    fetchData();
  }, []);
  return (
    <div>
      <main className={styles["main-details"]} >
        <div
          className={`${styles["container"]}  `}
        >
          <div className={styles.step}>
            <Steps
              current={step}
              items={[
                {
                  title: 'Chọn lĩnh vực',
                },
                {
                  title: 'Chọn giá thuê',
                },
                {
                  title: 'Xác nhận',
                },
              ]}
            />
          </div>
          {step === 0 && <>
            <div className={styles.listCard}>
              <h1 style={{ padding: '0px 21%' }}> Chọn lĩnh vực bạn  muốn tham gia</h1>
              <Row >
                {categoryList?.map((item) => (
                  <Col span={8}>
                    <Card
                      style={{
                        width: 300,
                        marginTop: 16,
                        border: selectedCards.includes(item.id) ? "3px solid #ff7421" : "3px solid transparent",
                      }}
                      onClick={() => handleCardClick(item.id)}
                    >
                      <Meta
                        avatar={<Avatar src={item?.image ?? ''} />}
                        title={item?.name}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </>}

          {step === 1 && <div className={styles.price}>
            <h1>Chọn giá thuê mỗi giờ</h1>
            <div className={styles.addCategory}>
              <InputNumber
                placeholder="Nhập số tiền"
                addonAfter="VND"
                style={{ width: '100%' }}
                value={price}
                onChange={(value) => handleChangePrice(value)}
                formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
              />
              {error && <Text type="danger">{error}</Text>}
            </div>
          </div>}

          {step === 2 && <div className={styles.price}>
            <h1>
              Gửi yêu cầu thanh công, admin đang duyệt yêu cầu của bạn.
            </h1>
          </div>}
          <div className={styles.btnFooter}>
            {(step !== 0 && step !== 2) && <Button type='default' style={{ height: 35, width: 80 }} size={'small'} onClick={handleBackStep} className={styles.btnSubmit}>Quay lại</Button>}
            {step === 0 && <Button type='primary' style={{ height: 35, width: 100 }} size={'small'} onClick={handleNextStep1} className={styles.btnSubmit}>Tiếp tục</Button>}
            {step === 1 && <Button type='primary' style={{ height: 35, width: 100 }} size={'small'} onClick={handleNextStep2} className={styles.btnSubmit}>Gửi yêu cầu</Button>}
            {step === 2 && <Button type='primary' style={{ height: 35, width: 100 }} size={'small'} onClick={navigateHome} className={styles.btnSubmit}>Trang chủ</Button>}
          </div>

          {/* <h1>Thêm lĩnh vực mới</h1>
          <div className={styles.addCategory}>
            <Input placeholder="Nhập tên lĩnh vực" />
            <TextArea placeholder="Giải thích về lĩnh vực mới này ..." />
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default ResgisterPgt;
