import React, { startTransition, useEffect, useMemo, useState } from "react";
import { Table, Input, Space, Modal, Button, message, Select } from "antd";
import classes from "./AccountUser.module.css";
import ModalView from "../../../../components/Dropdown/ModalView";
import ModalUpdate from "../../../../components/Dropdown/ModalUpdate";
import { deleteUser } from "../../../../services/UserService";
import Constants from "../../../../utils/constants";
import StarRating from "../../../../components/start-rating/StarRating";
import AvatarGroup from "../../../../components/image-group/AvatarGroup";
import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import DropdownOperation from "../../../../components/Dropdown/DropdownOperation";


const AccountUser = () => {

  const { Search } = Input;
  const columns = useMemo(() => [
    {
      title: 'Tên tài khoản',
      width: 140,
      dataIndex: 'username',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Họ và tên',
      dataIndex: '3',
      key: '3',
      render: (_, data) => <span>{`${data.firstname} ${data.lastname}`}</span>
    },
    {
      title: 'Tuổi',
      dataIndex: 'age',
      width: 70,
      align: 'center',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Giớt tính',
      dataIndex: 'gender',
      key: 'gender',
      width: 110,
      filters: [
        {
          text: 'Nam',
          value: 'Male',
        },
        {
          text: 'Nữ',
          value: "Female",
        },
      ],
      onFilter: (value, record) => record.gender === value,
      render: (data) => <div>
        {
          (data === 'Male' ? 'Nam' : 'Nữ')
        }
      </div>,
    },
    {
      title: 'SĐT',
      dataIndex: 'phone',
      width: 130,
      key: 'phone',
    },
    {
      title: 'Người theo dõi',
      dataIndex: 'follow',
      width: 160,
      align: 'center',
      // defaultSortOrder: 'descend',
      sorter: (a, b) => a.follow - b.follow,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      width: 200,
      filters: [
        {
          text: 'Đang hoạt động',
          value: true,
        },
        {
          text: 'Bị khóa',
          value: false,
        },
      ],
      onFilter: (value, record) => record.status === value,
      render: (_, data) =>
        <Select
          style={{
            width: "100%",
          }}
          onChange={(value) => onChangeSelectHandler(value, data?.id)}
          value={data?.status}
          options={Constants.optionStatus}
        />
    },
    {
      title: 'Tác vụ',
      key: 'operation',
      width: 130,
      align: 'center',
      render: (_, record) => (
        <DropdownOperation record={record} />
      )
    },
  ]);

  const [inputSearch, setInputSearch] = useState("");

  const onChangeSelectHandler = (value, id) => {
    console.log(value, id)
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      setInputSearch(event.target.value);
    }
  };

  const [valueSearch, setValueSearch] = useState();

  function handleSearch() {
    console.log(valueSearch)
  }
  const [kols, setKols] = useState([]);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <>
      <div className={classes["admin-user-container"]}>
        <div className={classes["header"]}>
          <div className={classes["titleTable"]}>
            <span> Danh sách người dùng</span>
          </div>
          <div className={classes["searchInput"]}>
            <Search
              allowClear
              enterButton="Search"
              onKeyDown={handleSearch}
              placeholder="Tìm kiếm với tên,...."
              onSearch={handleSearch} />
          </div>
        </div>

        <div className={[classes.tableContent]}>
          <Table
            columns={columns}
            dataSource={Constants.dataTableKol}
            onChange={onChange}
            scroll={{
              y: 'calc(100vh - 215px)'
            }}
          />
        </div>

      </div>
    </>
  );
};

export default AccountUser;
