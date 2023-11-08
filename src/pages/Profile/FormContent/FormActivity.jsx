import { Avatar, Badge, DatePicker, Select, Table } from "antd";
import { useEffect, useState } from "react";
import { getBookingHistory } from "../../../services/getApiProfile";
import { displayDateTime } from "../../../services/DateTimeUtil";
import Temp from "../../../utils/temp";
import Constants from "../../../utils/constants";



export default function FormActivity({ user }) {
  const [activity, setActivity] = useState();
  const [statusBooking, setStatusBooking] = useState("dabook");
  const [monthSelect, setMonthSelect] = useState("");
  const [nameKOL, setNameKOL] = useState("");
  const columns = [
    {
      title: "Mã booking",
      dataIndex: "id",
      key: "id",
      align: "left",
    },
    {
      title: "PGT",
      dataIndex: "pgt",
      key: "pgt",
      align: "left",
      render: (text, data) => <div> {text} </div>,
    },
    {
      title: "Ngày booking",
      key: "date",
      dataIndex: "date",
      align: "left",
      render: (text, data) => <div>{text}</div>,
    },
    {
      title: "Thời gian",
      key: "timestamp",
      dataIndex: "timestamp",
      align: "left",
      render: (text, data) => <div>{text}</div>,
    },
    {
      title: "Lĩnh Vực",
      dataIndex: "category",
      key: "category",
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
      render: (text, data) =>
        data.status === "PAID" ? (
          <Badge status="success" text="Hoàn thành" />
        ) : data.status === "CANCELED" ? (
          <Badge status="error" text="Đã hủy" />
        ) : data.status === "ACCEPTED" ? (
          <Badge status="processing" text="Đang tiến hành" />
        ) : data.status === "REJECTED" ? (
          <Badge status="warning" text="Đã từ chối" />
        ) : null,
    },
  ];

  const optionCategory = Constants.optionsCategory.map((field) => {
    return {
      value: field.id,
      label: field.name,
    };
  });

  const handleOnChangeDate = (e) => {
    console.log(e);
  };

  const handleOnChangeMonth = (e) => {
    setMonthSelect(e.target.value);
  };
  const handleOnChangeInput = (e) => {
    setNameKOL(e.target.value);
  };

  return (
    <div className="booking-container">
      {/* <h1 style={{ marginLeft: 30 }}>Lịch sử booking</h1> */}
      <div className="booking-title"><span>Lịch sử booking</span></div>

      <div className="booking-search" style={{justifyContent: 'flex-end'}} >
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
      <Table columns={columns} dataSource={Temp.bookingHistory} pagination={{
        defaultPageSize: 8,
        showSizeChanger: false,
        pageSizeOptions: ["10", "20", "30"]
      }}
      />
    </div>
  );
}
