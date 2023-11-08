import { Badge, Table } from "antd";
import { useEffect, useState } from "react";
import { getBookingHistory } from "../../../services/getApiProfile";
import { displayDateTime } from "../../../services/DateTimeUtil";
import Temp from "../../../utils/temp";
import Constants from "../../../utils/constants";



export default function FormActivity({ user }) {
  const [activity, setActivity] = useState();

  const columns = [
    {
      title: "Mã booking",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "PGT",
      dataIndex: "pgt",
      key: "pgt",
      align: "center",
      render: (text, data) => <div> {text} </div>,
    },
    {
      title: "Ngày booking",
      key: "date",
      dataIndex: "date",
      align: "center",
      render: (text, data) => <div>{text}</div>,
    },
    {
      title: "Thời gian",
      key: "timestamp",
      dataIndex: "timestamp",
      align: "center",
      render: (text, data) => <div>{text}</div>,
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


  return (
    <>
      <h1 style={{ marginLeft: 30 }}>Lịch sử booking</h1>
      <Table columns={columns} dataSource={Temp.bookingHistory} pagination={{
        defaultPageSize: 8,
        showSizeChanger: false,
        pageSizeOptions: ["10", "20", "30"]
      }}

      />
    </>
  );
}
