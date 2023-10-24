import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../services/DateTimeUtil";
import { createBooking } from "../../services/BookingService";
import { BookingStatus } from "../../utils/Enums";

import classes from "./Booking.module.css";
import { MessageContext } from "../../context/Message.context";
import { Modal, DatePicker, Form, Select, Button, Input, TimePicker, Space } from "antd";
import { Option } from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";
import { convertStringToNumber, getDate } from './../../utils/Utils';
import { toast } from "react-toastify";

const BookingCreate = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const kol = props.kol;
  const { sendPrivateNotification } = useContext(MessageContext);
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

  const handleBooking = () => {
    toast.success('Tạo lượt booking thành công, PGT sẽ phàn hồi lại trong 5 phút.')
    props.onCancelOpenHandler();
    // booking.timestamp = formatDate(new Date());
    // setBooking({ ...booking });
    // createBooking(kol.id, booking).then((res) => {
    //   console.log(res);
    //   if (!res.error) {
    //     sendPrivateNotification({
    //       type: "BOOKING",
    //       bookingId: res.id,
    //       content: `${user.firstName} đã gửi lời mời hợp tác đến bạn`,
    //       timestamp: formatDate(new Date()),
    //       userId: kol.userId,
    //     });
    //     navigate(`/bookings/${res.id}`);
    //   }
    //   if (res.error) {
    //   }
    // });
  };

  const onCloseModal = () => {
    props.onCancelOpenHandler();
  };

  const [timeBooking, setTimeBooking] = useState(1);
  const [dateBooking, setDateBooking] = useState();
  const [timeFromBooking, setTimeFromBooking] = useState();
  const [timeEndBooking, setTimeEndBooking] = useState();
  const [note, setNote] = useState();
  const [priceTotal, setPrice] = useState();

  useEffect(() => {
    setPrice(convertStringToNumber(parseInt(kol?.price) * timeBooking))
  }, [kol?.price, timeBooking])

  useEffect(() => {
    if (timeFromBooking && timeBooking) {
      console.log(timeBooking)
      const newTime = new Date(timeFromBooking?.$d);
      newTime.setHours(newTime.getHours() + timeBooking);
      let EndTime = timeFromBooking;
      EndTime.$d = newTime;
      setTimeEndBooking(EndTime);
    }
  }, [timeBooking, timeFromBooking])

  return (
    <Modal
      width={600}
      open={props.open}
      title="Tạo lượt thuê"
      onOk={handleBooking}
      destroyOnClose
      onCancel={onCloseModal}
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
        >
          <Form.Item label="Player" >{kol.firstName} {kol.lastName}</Form.Item>

          <Form.Item label="Ngày" name="date" rules={[{ required: true, message: 'Bắt buộc chọn ngày' }]} >
            <DatePicker placeholder="Chọn ngày" onChange={(e) => setDateBooking(e?.$d)} value={dateBooking} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name='time'
            rules={[{ required: true, message: 'Bắt buộc chọn giờ thuê ' }]}
            label="Số giờ thuê"
          >
            <Select placeholder="Chọn giờ thuê" allowClear onChange={(e) => setTimeBooking(e)} value={timeBooking}      >
              <Option value={1}>1 giờ</Option>
              <Option value={2}>2 giờ</Option>
              <Option value={3}>3 giờ</Option>
              <Option value={4}>4 giờ</Option>
              <Option value={5}>5 giờ</Option>
              <Option value={6}>6 giờ</Option>
              <Option value={7}>7 giờ</Option>
              <Option value={8}>8 giờ</Option>
              <Option value={9}>9 giờ</Option>
              <Option value={10}>10 giờ</Option>
              <Option value={11}>11 giờ</Option>
              <Option value={12}>12 giờ</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Thời gian" name="timefrom" rules={[{ required: true, message: 'Bắt buộc chọn giờ' }]} >
            <Space.Compact block>
              <TimePicker placeholder="Bắt đầu từ" style={{ width: '50%' }} use12Hours format="h:mm a" onChange={(e) => setTimeFromBooking(e)} />
              <TimePicker placeholder="Kết thúc" style={{ width: '50%' }} use12Hours format="h:mm a" value={timeEndBooking} disabled />
            </Space.Compact>
          </Form.Item>

          <Form.Item label="Tổng tiền">
            <Input
              style={{
                width: '100%',
                textAlign: 'right',
              }}
              value={priceTotal}
            />
          </Form.Item>
          <Form.Item
            label="Ghi chú"
            name="mota"
          >
            <TextArea
              rows={2}
              placeholder="Nhập lời nhắn"
              onChange={(e) => setNote(e)}
              value={note}
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default BookingCreate;
