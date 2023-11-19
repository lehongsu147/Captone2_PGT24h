import { Avatar, Badge, DatePicker, Select, Table } from "antd";
import { useEffect, useState } from "react";
import Constants from "../../../utils/constants";
import BookingFactories from "../../../services/BookingFactories";
import { getDate, getTime } from "../../../utils/Utils";
export default function FormActivity() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [dateTable, setDataTable] = useState();

  const [monthSelect, setMonthSelect] = useState("");
  const [nameKOL, setNameKOL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BookingFactories.getListBookingForUser(user?.id);
        setDataTable(response?.data);
      } catch (error) {
        // Handle errors here
      }
    };
    fetchData();
  }, [user?.id]);

  const columns = [
    {
      title: "Mã",
      dataIndex: "id",
      key: "id",
      width: 80,
      align: "center",
    },
    {
      title: "PGT",
      dataIndex: "pgt_name",
      key: "pgt_name",
      align: "left",
      render: (text, data) => <div> {text} </div>,
    },
    {
      title: "Ngày booking",
      key: "date",
      dataIndex: "date",
      align: "left",
      render: (text, data) => <div>{ getDate(data?.date,1)}</div>,
    },
    {
      title: "Thời gian",
      key: "time_from",
      dataIndex: "time_from",
      align: "left",
      render: (text, data) => <div>{ getTime(data?.time_from)} - { getTime(data.time_to)}</div>,
    },
    // {
    //   title: "Lĩnh Vực",
    //   dataIndex: "category_link",
    //   key: "category_link",
    //   align: 'center',
    //   width: 120,
    //   render: (text) => (
    //     <Avatar src={text ?? ''} width={20} height={20} />
    //   ),
    // },
    {
      title: "Tình trạng",
      key: "status",
      align: "left",
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

  return (
    <div className="booking-container">
      {/* <h1 style={{ marginLeft: 30 }}>Lịch sử booking</h1> */}
      <div className="booking-title"><span>Lịch sử booking</span></div>

      <div className="booking-search" style={{justifyContent: 'flex-end'}} >
        <DatePicker
          placeholder='Chọn ngày'
          onChange={(e) => handleOnChangeDate(e?.$d)}
        />
      </div>
      <Table columns={columns} dataSource={dateTable ?? []} pagination={{
        defaultPageSize: 8,
        showSizeChanger: false,
        pageSizeOptions: ["10", "20", "30"]
      }}
      />
    </div>
  );
}
