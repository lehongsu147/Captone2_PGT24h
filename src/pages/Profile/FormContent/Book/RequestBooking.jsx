import React, { useEffect, useState } from "react";
import { Table, Input, Select, DatePicker, Avatar, Badge } from "antd";
import "./Booking.css";
import Constants from "../../../../utils/constants";
import DropDownBookingRequest from "../../../../components/Dropdown/DropDownBookingRequest/DropDownBookingRequest";
import Temp from "../../../../utils/temp";
import BookingFactories from "../../../../services/BookingFactories";
import { convertStringToNumber, getDate, getTime } from "../../../../utils/Utils";

const RequestBooking = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [bookingList, setBookingList] = useState([]);
  const [statusBooking, setStatusBooking] = useState("dabook");
  const [monthSelect, setMonthSelect] = useState("");
  const [nameKOL, setNameKOL] = useState("");
 
 
  const fetchData = async () => {
    try {
      const response = await BookingFactories.getListRequestBookingForPGT(user?.id);
      setBookingList(response?.data);
      console.log("🚀 ~ file: FormActivity.jsx:22 ~ fetchData ~ response:", response)
    } catch (error) {
      // Handle errors here
    }
  };

  useEffect(() => {
    fetchData();
  }, [user?.id]);

  const columns = [
    {
      title: "Mã",
      dataIndex: "id",
      width: 50,
      render: (text) => (
        <div className="text-data">
          {text}
        </div>
      ),
    },
    {
      title: "Người thuê",
      width: 150,
      dataIndex: "user_name",
      render: (text) => (
        <div className="text-data">
          {text}
        </div>
      ),
    },
    {
      title: "Ngày booking",
      key: "date",
      dataIndex: "date",
      align: "left",
      render: (text, data) => <div>{getDate(data?.date, 1)}</div>,
    },
    {
      title: "Thời gian",
      key: "time_from",
      dataIndex: "time_from",
      align: "left",
      render: (text, data) => <div>{getTime(data?.time_from)} - {getTime(data.time_to)}</div>,
    },
    {
      title: "Lĩnh Vực",
      dataIndex: "category_link",
      key: "category_link",
      align: 'center',
      width: 120,
      render: (text) => (
        <Avatar src={text ?? ''} width={20} height={20} />
      ),
    },
    {
      title: "Tình trạng",
      key: "status",
      align: "left",
      width: 150,
      render: (text, data) =>
        data.status === 4 ? (
          <Badge status="success" text="Hoàn thành" />
        ) : data.status === 3 ? (
          <Badge status="error" text="PGT Đã từ chối" />
        ) : data.status === 2 ? (
          <Badge status="processing" text="PGT Đã xác nhận" />
        ) : data.status === 1 ? (
          <Badge status="warning" text="Chờ xác nhận" />
        ) : null,
    },
    {
      title: "Tổng sô tiền",
      dataIndex: "price",
      key: "price",
      align: 'right',
      width: 140,
      render: (text) => <div className="text-data">{convertStringToNumber(text) }</div>,
    },
    {
      title: "Tác vụ",
      key: "action",
      width: 90,
      align: 'center',
      render: (_, record) => <DropDownBookingRequest id={record?.id} onFetchData={fetchData} />
    },
  ];

  const handleOnChangeDate = (e) => {
    console.log(e);
  };

  const handleOnChangeMonth = (e) => {
    setMonthSelect(e.target.value);
  };
  const handleOnChangeInput = (e) => {
    setNameKOL(e.target.value);
  };

  const optionCategory = Constants.optionsCategory.map((field) => {
    return {
      value: field.id,
      label: field.name,
    };
  });


  return (
    <div className="booking-container">
      <div className="booking-title"><span>Booking</span></div>
      <div className="booking-search">
        <Input
          placeholder="Tìm kiếm theo mã, tên người thuê, ..."
          size="middle "
          onChange={(e) => handleOnChangeInput(e)} />
        <Select
          placeholder='Chọn lĩnh vực'
          onChange={(e) => handleOnChangeMonth(e)}
          options={optionCategory}
        />
        <DatePicker
          placeholder='Chọn ngày'
          onChange={(e) => handleOnChangeDate(e?.$d)}
        />
      </div>

      <div className="booking-table">
        <Table
          columns={columns}
          pagination={{
            defaultPageSize: 8,
            showSizeChanger: false,
            pageSizeOptions: ["10", "20", "30"]
          }}
          dataSource={bookingList ?? []}
        // dataSource={booking
        //   .filter((item) => {
        //     return monthSelect + statusBooking === ""
        //       ? item
        //       : (item.thoigianbook.slice(3, 5) + item.status).includes(
        //         monthSelect + statusBooking
        //       );
        //   })
        //   .filter((item) => {
        //     return nameKOL.toLowerCase() === ""
        //       ? item
        //       : item.tenKOL.toLowerCase().includes(nameKOL.toLowerCase());
        //   })}
        // pagination={{
        //   defaultPageSize: 10,
        //   showSizeChanger: false,
        //   pageSizeOptions: ["10", "20", "30"],
        // }}
        />
      </div>

    </div>
  );
};

export default RequestBooking;
