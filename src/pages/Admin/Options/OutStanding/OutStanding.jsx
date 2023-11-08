import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { OutStandingData } from "../DataAdmin";
import "./OutStanding.css";
import Temp from "../../../../utils/temp";
import Constants from "../../../../utils/constants";

const OutStanding = () => {
  const [outStanding, setOutStanding] = useState([]);
  const [statusSelect, setStatusSelect] = useState("dangnoibat");
  const [nameKOL, setNameKOL] = useState("");

  useEffect(() => {
    // const getData = async () => {
    //   const listOutStanding = await OutStandingData;
    //   setOutStanding(listOutStanding);
    // };
    // getData();
      setOutStanding(Temp.HotKOL);
  }, []);

  const columns = [
    {
      title: "Tên PGT",
      dataIndex: "username",
      key: "username",
      render: text =>
        <div className="text-data">
          {text}
        </div>
    },
    {
      title: "Số lượng theo dõi",
      dataIndex: "soluongtiepcan",
      key: "soluongtiepcan",
      render: text =>
        <div className="text-data">
          {text}
        </div>
    },
    {
      title: "Lượt booking",
      dataIndex: "soluongbook",
      key: "soluongbook",
      render: text =>
        <div className="text-data">
          {text}
        </div>
    },
    {
      title: "Tổng doanh thu",
      dataIndex: "tongdoanhthu",
      key: "tongdoanhthu",
      render: text =>
        <div className="text-data">
          {text}
        </div>
    },
    {
      title: "Tác vụ",
      key: "action",
      render: (_, record) =>
        <div className="action-btn">
          <button
            className="btn-add-noibat"
            onClick={() => handleAddNoiBat(record)}
          >
            Cho nổi bật
          </button>
        </div>
    }
  ];
  const handleOnChangeStatus = e => {
    setStatusSelect(e.target.value);
  };
  const handleOnChangeInput = e => {
    setNameKOL(e.target.value);
  };
  const handleAddNoiBat = value => {
    console.log(value);
  };

  return (
    <div className="out-standing-container">
      <div className="out-standing-title">Nổi Bật</div>
      <div className="out-standing-search">
        <input
          type="text"
          placeholder="Tên"
          className="input-search"
          onChange={e => handleOnChangeInput(e)}
        />
        <select
          className="select-search"
          onChange={e => handleOnChangeStatus(e)}
        >
          <option value={"dangnoibat"} selected>
            Đang nổi bật
          </option>
          <option value={"chuanoibat"}>Chưa nổi bật</option>
        </select>
      </div>
      <Table
        columns={columns}
        dataSource={Constants.dataTableKol}
        // dataSource={outStanding
        //   .filter((item) => {
        //     return statusSelect === ""
        //       ? item
        //       : item.trangthai.includes(statusSelect);
        //   })
        //   .filter((item) => {
        //     return nameKOL.toLowerCase() === ""
        //       ? item
        //       : item.tenKOL.toLowerCase().includes(nameKOL.toLowerCase());
        //   })}
        pagination={{
          defaultPageSize: 8,
          showSizeChanger: false,
          pageSizeOptions: ["10", "20", "30"]
        }}
      />
    </div>
  );
};

export default OutStanding;
