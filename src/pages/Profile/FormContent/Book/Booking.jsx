import React, { useEffect, useState } from "react";
import { BookingData } from "./DataAdmin";
import { Table, Radio, Input, Select, DatePicker, Avatar } from "antd";
import "./Booking.css";
import Search from "antd/es/input/Search";
import DropdownOperation from "../../../../components/Dropdown/DropdownOperation";
import Constants from "../../../../utils/constants";
import DropDownBookingRequest from "../../../../components/Dropdown/DropDownBookingRequest/DropDownBookingRequest";
import Temp from "../../../../utils/temp";

const Booking = () => {
  const [booking, setBooking] = useState([]);
  const [statusBooking, setStatusBooking] = useState("dabook");
  const [monthSelect, setMonthSelect] = useState("");
  const [nameKOL, setNameKOL] = useState("");

  useEffect(() => {
    const getData = async () => {
      const listBooking = await BookingData;
      setBooking(listBooking);
    };
    getData();
  }, []);
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
      dataIndex: "username",
      render: (text) => (
        <div className="text-data">
          {text}
        </div>
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "createAt",
      key: "createAt",
      width: 140,
      render: (text) => <div className="text-data">{text}</div>,
    },
    {
      title: "Thời Gian",
      dataIndex: "timestamp",
      width: 200,
      render: (text) => <div className="text-data">{text}</div>,
    },
    {
      title: "Lĩnh Vực",
      dataIndex: "category",
      key: "category",
      align: 'center',
      width: 80,
      render: (text) => (
        <Avatar src={text ?? ''} width={20} height={20} />
      ),
    },
    {
      title: "Tổng sô tiền",
      dataIndex: "money",
      key: "money",
      align: 'right',
      width: 140,
      render: (text) => <div className="text-data">{text}</div>,
    },
    {
      title: "Tác vụ",
      key: "action",
      width: 90,
      align: 'center',
      render: (_, record) => <DropDownBookingRequest record={record} />
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
          dataSource={Temp.bookingRequest}
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

export default Booking;
