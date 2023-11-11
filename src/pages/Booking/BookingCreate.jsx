import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Booking.module.css";
import { Modal, DatePicker, Form, Select, Input, TimePicker, Space, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { convertStringToNumber } from './../../utils/Utils';
import { toast } from "react-toastify";
import PgtFactories from "../../services/PgtFatories";

const BookingCreate = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const kol = props.kol;
  const [category, setCategory] = useState();

  // const { sendPrivateNotification } = useContext(MessageContext);
  const navigate = useNavigate();
  const [booking, setBooking] = useState({
    timestamp: "",
    postPrice: 0,
    postNumber: 0,
    videoPrice: 0,
    videoNumber: 0,
    totalPrice: 0,
    description: "",
  });


  const onCloseModal = () => {
    props.onCancelOpenHandler();
  };

  const [errorMessage, setErrorMessage] = useState('');
  const [timeBooking, setTimeBooking] = useState(1);
  const [dateBooking, setDateBooking] = useState();
  const [rangeTimeBooking, setRangeTimeBooking] = useState();

  const [note, setNote] = useState();
  const [priceTotalShow, setPriceShow] = useState(convertStringToNumber(parseInt(kol?.price)));
  const [priceTotal, setPrice] = useState();

  useEffect(() => {
    setPriceShow(convertStringToNumber(parseInt(kol?.price) * timeBooking))
    setPrice(kol?.price * timeBooking)
  }, [kol?.price, timeBooking])

  const checkDateBooking = (value) => {
    const now = new Date();
    const bookingDate = new Date(dateBooking);

    if (bookingDate) {
      const timeDiff = bookingDate - now;
      const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
      if (daysDiff >= 15) {
        return Promise.reject(new Error('Ngày đặt phải nằm trong 15 ngày kể từ ngày hiện tại'));

      } else if (daysDiff < -1) {
        return Promise.reject(new Error('Ngày đặt đã qua, bạn không thể đặt trong quá khứ'));
      }
      else {
        return Promise.resolve();
      }
    }
    else {
      return Promise.reject(new Error('Bắt buộc chọn ngày'));
    }
  };


  useEffect(() => {
    if (rangeTimeBooking) {
      const newTime = rangeTimeBooking[1]?.$H - rangeTimeBooking[0]?.$H;
      const startTime  = rangeTimeBooking[0]?.$d;
      const timeCurrent = new Date();
      // if ( startTime < timeCurrent){
      //   setErrorMessage('Thời gian bắt đầu phải là thời gian trong tương lai.');
      // }
      // else
       if (newTime === 0) {
        setErrorMessage('Vui lòng chọn thời gian thuê lớn hơn 1 giờ.')
      }
      else {
        setTimeBooking(newTime);
        setErrorMessage('')
      }
    }
  }, [rangeTimeBooking])

  const requestBooking = async (data) => {
    try {
      const response = await PgtFactories.requestBooking(data);
      if (response.status === 200) {
        toast.success('Tạo lượt booking thành công, PGT sẽ phàn hồi lại trong 5 phút.')
        props.onCancelOpenHandler();
      }
      else if (response.status === 201) {
        toast.error(response?.messsage);
        setErrorMessage(response?.messsageError);
      }
      else {
        toast.error('Hệ thống lỗi, vui lòng thử lại sau')
      }
    } catch (error) {
      toast.error('Hệ thống lỗi, vui lòng thử lại sau')
    }
  };

  const onSubmit = () => {
    const data = {
      userId: user?.id,
      pgtId: kol?.id,
      price: parseInt(priceTotal),
      date: dateBooking,
      timeStart: rangeTimeBooking[0]?.$d,
      timeEnd: rangeTimeBooking[1]?.$d,
      category: category,
      note: note,
    }
    requestBooking(data);
  };

  const optionCategory = kol?.listgame?.map((field) => {
    return {
      value: field.id,
      label: field.name,
    };
  });

  const handleChangeleGame = (value) => {
    setCategory(value);
  }

  return (
    <Modal
      width={600}
      open={props.open}
      title="Tạo lượt thuê"
      destroyOnClose={true}
      onCancel={onCloseModal}
      footer=""
    >

      <div className={classes["modal-booking-create"]}>
        <Form
          name="basic"
          labelAlign='left'
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onSubmit}
        >
          <Form.Item label="Player" >{kol.firstName} {kol?.username}</Form.Item>
          <Form.Item label="Ngày" name='dateBooking'
            rules={[
              { required: true, message: 'Bắt buộc chọn ngày' },
              { validator: checkDateBooking },]}
          >
            <DatePicker placeholder="Chọn ngày" onChange={(e) => setDateBooking(e?.$d)} value={dateBooking} style={{ width: '100%' }} />
          </Form.Item>

          {/* <Form.Item label="Lĩnh vực" name="category" rules={[{ required: true, message: 'Bắt buộc chọn lĩnh vục' }]} >
            <Select
              style={{ width: "100%", }}
              placeholder="Chọn lĩnh Vực"
              onChange={(e) => handleChangeleGame(e)}
              options={optionCategory}
            />
          </Form.Item> */}

          <Form.Item label="Thời gian" name="timefrom" >
            <Space.Compact block >
              <TimePicker.RangePicker format='h:mm' value={rangeTimeBooking} onChange={(e) => setRangeTimeBooking(e)} />
            </Space.Compact>
            {errorMessage !== '' && <span style={{ color: 'red' }}> {errorMessage}</span>}
          </Form.Item>

          <Form.Item label="Tổng tiền">
            <Input
              style={{ width: '100%', textAlign: 'right', }}
              value={priceTotalShow}
            />
          </Form.Item>
          <Form.Item
            label="Ghi chú"
            name="mota"
          >
            <TextArea
              rows={2}
              placeholder="Nhập lời nhắn"
              onChange={(e) => setNote(e.target.value)}
              value={note}
            />
            <div style={{ display: 'flex', gap: 20, float: 'right', marginTop: 20 }}>
              <Button type="link" htmlType="button" onClick={onCloseModal}>
                Hủy
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form.Item>

        </Form>
      </div>
    </Modal>
  );
};

export default BookingCreate;
