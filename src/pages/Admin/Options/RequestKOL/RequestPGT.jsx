import React, { useEffect, useState } from "react";
import { BookingData } from "../DataAdmin";
import { Table, Radio, Input, Select, DatePicker, Avatar } from "antd";
import "./Booking.css";
import Search from "antd/es/input/Search";
import DropdownOperation from "../../../../components/Dropdown/DropdownOperation";
import Constants from "../../../../utils/constants";
import AvatarGroup from "../../../../components/image-group/AvatarGroup";
import Temp from "../../../../utils/temp";
import DropDownBookingRequest from "../../../../components/Dropdown/DropDownBookingRequest/DropDownBookingRequest";

const RequestPGT = () => {
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
      dataIndex: "code",
      width: 50,
      render: (text) => (
        <div className="text-data">
          {text}
        </div>
      ),
    },
    {
      title: "Ảnh đại diện",
      width: 150,
      dataIndex: "avatarLink",
      render: (text) => (
        <div className="text-data">
          <Avatar src={text}/>
        </div>
      ),
    },
    {
      title: "Tên tài khoản",
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
      title: "Giá thuê",
      dataIndex: "price",
      key: "price",
      width: 140,
      render: (text) => <div className="text-data">{text}</div>,
    },
    {
      title: "Lĩnh Vực",
      dataIndex: "listgame",
      key: "listgame",
      align: 'center',
      width: 80,
      render: (text, data) => (
        <AvatarGroup list={data?.listgame ?? []} maxCount={4} />
      ),
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
      <div className="booking-title"><span>Yêu cầu làm PGT</span></div>
      <div className="booking-search">
        <Input
          placeholder="Tìm kiếm tên người đăng kí, ..."
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
          dataSource={Temp?.requestPGT}
        />
      </div>

    </div>
  );
};

export default RequestPGT;
