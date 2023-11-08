import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Booking.module.css";
import { MessageContext } from "../../context/Message.context";
import { Modal, DatePicker, Form, Select, Input, TimePicker, Space } from "antd";
import { Option } from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";
import { convertStringToNumber } from './../../utils/Utils';
import { toast } from "react-toastify";
import { logDOM } from "@testing-library/react";

const BookingCreate = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const kol = props.kol;
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

  const [timeBooking, setTimeBooking] = useState(1);
  const [dateBooking, setDateBooking] = useState();
  const [rangeTimeBooking, setRangeTimeBooking] = useState();

  const [error, setError] = useState(null);
  const [inputTimeEndBooking, setInputTimeEndBooking] = useState();
  const [note, setNote] = useState();
  const [priceTotal, setPrice] = useState();

  useEffect(() => {
    setPrice(convertStringToNumber(parseInt(kol?.price) * timeBooking))
  }, [kol?.price, timeBooking])

  const checkDate = (startTimeRange) => {
    // Lấy ngày, tháng và năm từ dateBooking
    const dateBookingDate = dateBooking.getDate();
    const dateBookingMonth = dateBooking.getMonth();
    const dateBookingYear = dateBooking.getFullYear();

    // Lấy ngày, tháng và năm từ startTimeRange
    const startTimeRangeDate = startTimeRange.getDate();
    const startTimeRangeMonth = startTimeRange.getMonth();
    const startTimeRangeYear = startTimeRange.getFullYear();

    if (
      dateBookingDate === startTimeRangeDate &&
      dateBookingMonth === startTimeRangeMonth &&
      dateBookingYear === startTimeRangeYear
    ) {
      return true
    }
    else {
      return false
    }
  }


  const checkTimeStart = (startTimeRange, endTimeRange) => {
    const inputHoursStart = rangeTimeBooking[0]?.$d.getHours();
    const inputMinutesStart = rangeTimeBooking[0]?.$d.getMinutes();

    const inputHoursEnd = rangeTimeBooking[1]?.$d.getHours();
    const inputMinutesEnd = rangeTimeBooking[1]?.$d.getMinutes();
    const startHours = startTimeRange.getHours();
    const startMinutes = startTimeRange.getMinutes();

    const endHours = endTimeRange.getHours();
    const endMinutes = endTimeRange.getMinutes();
    if (
      ((inputHoursStart >= startHours && inputHoursStart <= endHours) ||
        (inputHoursEnd >= startHours && inputHoursEnd <= endHours)) ||
      ((inputHoursStart >= startHours && inputHoursStart <= endHours && inputMinutesStart > startMinutes)
        && (inputHoursEnd === endHours && inputMinutesEnd < endMinutes))
    ) {
      return true;
    } else {
      return false;
    }
  }

  const checkTimeBookingDateExit = () => {
    const startTimeRange = new Date('2023-11-09T08:00:00');
    const endTimeRange = new Date('2023-11-09T10:00:00');
    if (checkDate(startTimeRange)) {
      if (checkTimeStart(startTimeRange, endTimeRange)) {
        return true;
      }
      return false;
    }
    return false;
  }


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
      setTimeBooking(newTime);
      setError({ mes: '' })
    }
  }, [rangeTimeBooking])

  const handleBooking = () => {

    const checkDateExits = checkTimeBookingDateExit();
    if (checkDateExits) {
      toast.error('PGT đã trùng lịch, vui lòng chọn lại lịch khác.')
      setError(
        {
          mes: 'PGT đã có lịch booking lúc 8:00 - 10: 00, vui lòng chọn thời gian khác.'
        }
      );
    }
    else {
      toast.success('Tạo lượt booking thành công, PGT sẽ phàn hồi lại trong 5 phút.')
      setError(
        {
          mes: ''
        }
      );
      props.onCancelOpenHandler();
    }
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
    // props.onCancelOpenHandler();
  };


  return (
    <Modal
      width={600}
      open={props.open}
      title="Tạo lượt thuê"
      onOk={handleBooking}
      destroyOnClose={true}
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

          <Form.Item label="Ngày" name='dateBooking'
            rules={[{ validator: checkDateBooking },]}
          >
            <DatePicker placeholder="Chọn ngày" onChange={(e) => setDateBooking(e?.$d)} value={dateBooking} style={{ width: '100%' }} />
          </Form.Item>

          {/* <Form.Item
            name='time'
            rules={[{ required: true, message: 'Bắt buộc chọn giờ  thuê ' }]}
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
          </Form.Item> */}

          <Form.Item label="Thời gian" name="timefrom" rules={[{ required: true, message: 'Bắt buộc chọn giờ' }]} >
            <Space.Compact block>
              <TimePicker.RangePicker format='h:mm' onChange={(e) => setRangeTimeBooking(e)} />
              {/* 
              <TimePicker placeholder="Bắt đầu từ" style={{ width: '50%' }} use12Hours format="h:mm a" value={inputTimeFromBooking} onChange={(e) => {
                setInputTimeFromBooking(e)
                setInputTimeEndBooking(e)
              }} />
              <TimePicker placeholder="Kết thúc" style={{ width: '50%' }} use12Hours format="h:mm a" value={inputTimeEndBooking} disabled /> */}
            </Space.Compact>
            {error?.mes !== '' ? <span style={{ color: '#eb6734', fontSize: 12 }}>{error?.mes}</span> : <></>}
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
