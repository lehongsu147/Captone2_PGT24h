import React, { useEffect, useState } from "react";
import classes from "./Booking.module.css";
import { Modal, Form, Input, Button, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { ToastNoti, ToastNotiError, convertStringToNumber, getDate, getTime } from '../../utils/Utils';
import { toast } from "react-toastify";
import BookingFactories from "../../services/BookingFactories";
import { createNotification, sendNewMessageToExistingUser, sendNewMessageToNewUser } from "../../services/ChatService";

const BookingDetail = (props) => {
  const { bookingId, isHaveComment } = props;
  const [booking, setBooking] = useState();
  console.log("🚀 ~ file: BookingDetail.jsx:13 ~ BookingDetail ~ booking:", booking)

  const user = JSON.parse(localStorage.getItem("user"))

  const fetchData = async (bookingId) => {
    try {
      const response = await BookingFactories.getBookingDetail(bookingId);
      if (response?.status === 200) {
        setBooking(response?.data);
      }
    } catch (error) {
      // Handle errors here
    }
  };

  useEffect(() => {
    if (bookingId) {
      fetchData(bookingId);
    }
  }, [bookingId]);

  const onCloseModal = () => {
    props.onCancelOpenHandler();
  };


  const onAcceptSubmit = async () => {
    try {status
      const response = await BookingFactories.updateBooking(bookingId, 2);
      if (response?.status === 200) {
        toast.success('Chấp nhận yêu cầu booking thành công.')
        createNotification(booking?.user_id, 2, response?.data[0].id, "PGT đã chấp nhận yêu cầu booking của bạn", "Liên hệ với PGT để biết thêm chi tiết.");

        sendNewMessageToNewUser(
          user?.id,
          parseInt(booking?.user_id),
          user?.userName,
          booking?.user_name,
          user?.avatar,
          '',
          'Xin chào bạn! Cảm ơn bạn đã sử dụng dịch vụ của mình. Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu gì, đừng ngần ngại nói cho tôi biết. Mình luôn sẵn sàng hỗ trợ bạn một cách tốt nhất.',
        );
        onCloseModal();
      }
    } catch (error) {
      toast.error('Hệ thống lỗi, vui lòng thử lại sau.')
    }
  };

  const deniedBooking = async () => {
    try {
      const response = await BookingFactories.updateBooking(bookingId, 3);
      if (response?.status === 200) {
        toast.success('Đã từ chối yêu cầu booking.')
        createNotification(booking?.user_id, 2, response?.data[0].id, "PGT đã từ chối yêu cầu booking của bạn", "Liên hệ với PGT để biết thêm chi tiết.");
      }
      onCloseModal();
    } catch (error) {
      toast.error('Hệ thống lỗi, vui lòng thử lại sau.')
    }
  }
  const dateBooking = (getDate(booking?.date))
  const [valueRate, setValueRate] = useState();
  const [valueComment, setValueComment] = useState();
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

  async function submitComment() {
    try {
      const response = await BookingFactories.updateBooking(bookingId, 5, valueRate, valueComment);
      if (response?.status === 200) {
        ToastNoti();
        setBooking(response?.data);
      }
      else {
        ToastNotiError();
      }
    } catch (error) {
      ToastNotiError();
    }
  }
  return (
    <Modal
      width={600}
      open={props.open}
      title="Thông tin lượt thuê"
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
          onFinish={onAcceptSubmit}
        >
          <Form.Item label="Người thuê"> <span style={{ float: 'right' }}> {booking?.user_name}  </span> </Form.Item>
          <Form.Item label="Trạng thái"       >
            {booking?.status === 1 && <span style={{ color: 'green', float: 'right' }} > Chờ xác nhận</span>}
            {booking?.status === 2 && <span style={{ color: 'blue', float: 'right' }} > {user?.id === booking?.user_id ? 'PGT' : 'Bạn'} đã chấp nhận yêu cầu booking này</span>}
            {booking?.status === 3 && <span style={{ float: 'right', color: 'red' }} > {user?.id === booking?.user_id ? 'PGT' : 'Bạn'} đã từ chối yêu cầu booking này</span>}
            { (booking?.status === 4 || booking?.status === 5  )&& <span style={{ float: 'right', color: 'green' }} > Hoàn thành</span>}
          </Form.Item>
          <Form.Item label="Ngày" >
            <Input
              style={{ width: '100%', textAlign: 'right', }}
              value={dateBooking}
            />
          </Form.Item>

          <Form.Item label="Thời gian" >
            <Input
              style={{ width: '100%', textAlign: 'right', }}
              value={`${getTime(booking?.time_from)} - ${getTime(booking?.time_to)}`}
            />
          </Form.Item>
          <Form.Item label="Tổng tiền">
            <Input
              style={{ width: '100%', textAlign: 'right', }}
              value={convertStringToNumber(booking?.price)}
            />
          </Form.Item>


          {isHaveComment ? <>
            <Form.Item label="Đánh giá">
              <span style={{ float: 'right' }}>
                <Rate tooltips={desc} onChange={setValueRate} value={booking?.rate ? booking?.rate  : valueRate} />
                {valueRate ? <span className="ant-rate-text">{desc[valueRate - 1]}</span> : ''}
              </span>
            </Form.Item>
            <Form.Item label="Nhận xét">
              <TextArea
                rows={2}
                placeholder="Nếu nhận xét của bạn ..."
                value={booking?.comment ? booking?.comment : valueComment}
                onChange={(e) => setValueComment(e.target.value)}
              />
              <div style={{ display: 'flex', gap: 20, float: 'right', marginTop: 20 }}>
                {booking?.status === 4 &&
                  <Button onClick={(e) => submitComment()} type="primary" >
                    Gửi đánh giá
                  </Button>
                }
              </div>
            </Form.Item>
          </>
            : <>
              <Form.Item
                label="Ghi chú"
              >
                <TextArea
                  rows={2}
                  placeholder=""
                  value={booking?.note}
                />
                {booking?.status === 1 &&
                  <div style={{ display: 'flex', gap: 20, float: 'right', marginTop: 20 }}>
                    <Button type="link" htmlType="button" onClick={deniedBooking}>
                      Từ chối yêu cầu
                    </Button>
                    <Button type="primary" htmlType="submit">
                      Chấp nhận
                    </Button>
                  </div>}
              </Form.Item>
            </>}
        </Form>
      </div>
    </Modal >
  );
};

export default BookingDetail;
