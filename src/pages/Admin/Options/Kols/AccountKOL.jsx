import React, { useState } from "react";
import { Table, message, Select } from "antd";
import classes from "./AccountKOL.module.css";
import { getKols } from "../../../../services/KolService.js";
import { getKolFields } from "../../../../services/FieldService";
import { getCities } from "../../../../services/CityService";
import { deleteUser } from "../../../../services/UserService";
import Constants from "../../../../utils/constants";
import AvatarGroup from "../../../../components/image-group/AvatarGroup";
import StarRating from "../../../../components/start-rating/StarRating";
import Search from "antd/es/input/Search";
import DropdownOperation from "../../../../components/Dropdown/DropdownOperation";



const AccountKOL = () => {

  const columns = [
    {
      title: 'Tên tài khoản',
      width: 140,
      dataIndex: 'username',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Họ và tên',
      width: 180,
      dataIndex: '3',
      key: '3',
      render: (_, data) => <span>{`${data.firstname} ${data.lastname}`}</span>
    },
    {
      title: 'Lĩnh vực',
      dataIndex: 'listgame',
      key: 'listgame',
      width: 150,
      filters: [
        {
          text: 'Truy Kích PC',
          value: 1,
        },
        {
          text: 'Liên minh huyền thoại',
          value: 2,
        },
        {
          text: 'Đấu trường công lý',
          value: 3,
        },
        {
          text: 'PUBG',
          value: 4,
        },
      ],
      onFilter: (value, record) => {
        console.log("🚀 ~ file: AccountKOL.jsx:57 ~ AccountKOL ~ record:", record.listgame);
        console.log("🚀 ~ file: AccountKOL.jsx:57 ~ AccountKOL ~ value:", value);
        return record.listgame.some((item) => item.id === value);
      },
      render: (data) => <AvatarGroup list={data} maxCount={4} />
    },
    {
      title: 'Người theo dõi',
      dataIndex: 'follow',
      width: 150,
      // defaultSortOrder: 'descend',
      sorter: (a, b) => a.follow - b.follow,
    },
    {
      title: 'Tỷ lệ hoàn thành',
      width: 160,
      dataIndex: 'rateDone',
      key: '7',
      // defaultSortOrder: 'descend',
      sorter: (a, b) => a.rateDone - b.rateDone,
    },
    {
      title: 'Đánh giá',
      dataIndex: 'star',
      width: 140,
      key: '7',
      // defaultSortOrder: 'descend',
      sorter: (a, b) => a.star - b.star,
      render: (star) => <StarRating starCount={star} />
    },
    {
      title: 'Tuổi',
      dataIndex: 'age',
      width: 70,
      // defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Giớt tính',
      dataIndex: 'gender',
      key: 'gender',
      width: 120,
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
      width: 140,
      key: 'phone',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      width: 220,
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
        <DropdownOperation record={record} type={'KOL'} />
      )
    },
  ];

  const [openViewModal, setOpenViewModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [isDeleted, setIsDeleted] = useState()

  const [dataProps, setDataProps] = useState({});
  const [messageApi, contextHolder] = message.useMessage();
  const [inputSearch, setInputSearch] = useState("");

  const onChangeSelectHandler = (value, id) => {
    console.log(value, id)
  };



  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      setInputSearch(event.target.value);
    }
  };

  const onOpenViewHandler = (data) => {
    setOpenViewModal(true);
    setDataProps(data);
    // console.log(data);
  };

  const onCloseViewHandler = () => {
    setOpenViewModal(false);
  };

  const onOpenDeleteModalHandler = (data) => {
    setOpenDeleteModal(true);
    setDataProps(data);
  };

  const onDeleteUserHandler = (id) => {
    deleteUser(id).then((res) => {
      setIsDeleted(id)
      messageApi.open({
        type: "success",
        content: "Xóa thành công!",
      });
    });
    setOpenDeleteModal(false);
  };

  const onOpenUpdateModalHandler = (data) => {
    setOpenUpdateModal(true);
    setDataProps(data);
  };

  const onCloseUpdateModalHandler = () => {
    setOpenUpdateModal(false);
  };

  const [valueSearch, setValueSearch] = useState();
  function handleSearch() {
    console.log(valueSearch)
  }

  const [kols, setKols] = useState([]);
  const [fieldList, setFieldList] = useState([]);
  const [cityList, setCityList] = useState([]);

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
        <div className={classes["rowContent"]}>
          <Table
            columns={columns}
            dataSource={Constants.dataTableKol}
            scroll={{
              x: 1800,
              y: 'calc(100vh - 220px)'
            }}
          />
        </div>


      </div>
    </>
  );
};

export default AccountKOL;
