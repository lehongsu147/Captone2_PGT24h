import React, { useState } from "react";
import Chart from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import Constants from "./../../../../utils/constants";
import { DatePicker, Select, Tabs } from "antd";
import TabMoney from "./TabMoney";
import TabBooking from "./TabBooking";
import TabAll from "./TabAll";

const Statistical = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  //   const data = {
  //     labels: labels,
  //     datasets: [
  //       {
  //         label: "My First dataset",
  //         backgroundColor: "rgb(255, 99, 132)",
  //         borderColor: "rgb(255, 99, 132)",
  //         data: [0, 10, 5, 2, 20, 30, 45]
  //       }
  //     ]
  //   };

  const onChange = key => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Tất cả",
      children: <TabMoney />
    },
    {
      key: "2",
      label: "Tổng thu nhập",
      children: <TabMoney />
    },
    {
      key: "3",
      label: "Lượt booking",
      children: <TabBooking />
    }
  ];

  const [typeSelect, setSelectType] = useState('1');
  const [yaer, setYear] = useState();
  console.log("🚀 ~ file: Statistical.js:47 ~ Statistical ~ yaer:", yaer)
  const [month, setMonth] = useState();
  console.log("🚀 ~ file: Statistical.js:48 ~ Statistical ~ month:", month)
  const [date, setDate] = useState();
  console.log("🚀 ~ file: Statistical.js:49 ~ Statistical ~ date:", date)

  const handleOnChangeDate = (e) => {
    setDate(e)
  };
  const handleOnChangeMonth = (e) => {
    setMonth(e)
  };
  const handleOnChangeYear= (e) => {
    setYear(e)
  };

  const handleOnChangeSelectType = (e) => {
    setSelectType(e);
  };

  const optionCategory = [
    {
      value: '1',
      label: "Năm"
    },
    {
      value: '2',
      label: "Tháng"
    },
    {
      value: '3',
      label: "Ngày"
    },
  ]

  return (
    <div className="booking-container" style={{ overflow: 'scroll', height: '100vh' }}>
      <div className="booking-title">
        <span>Thống kê</span>
      </div>
      <div className="booking-title">
        <div style={{ float: 'right' , display: 'flex', gap: 15 }}>
          <Select
            style={{ minWidth: 150 }}
            placeholder='Chọn loại biểu đồ'
            onChange={handleOnChangeSelectType}
            options={optionCategory}
          />
          {/* <DatePicker onChange={onChange} picker={typeSelect === 1 ? "year" : (typeSelect === 2 ? "month" : 'date')} /> */}
          {typeSelect === '1' && (
            <DatePicker
              onChange={handleOnChangeYear}
              placeholder='Chọn năm'
              picker="year"
            />
          )}
          {typeSelect === '2' && (
            <DatePicker
              onChange={handleOnChangeMonth}
              picker="month"
              placeholder='Chọn tháng'
            />
          )}
          {typeSelect === '3' && (
            <DatePicker
              placeholder='Chọn ngày'
              onChange={handleOnChangeDate}
            />
          )}
        </div>
      </div>

      <div className="booking-search" style={{ width: '100%' }}>
        {/* <Select placeholder="Chọn thể loại" /> */}
        {/* <Tabs style={{width: '100%' , }} defaultActiveKey="1" items={items} onChange={onChange} /> */}

        <TabAll selectedCategory={typeSelect} month={month}/>
        {/* <Bar data={data} options={options} /> */}
      </div>
    </div>
  );
};

export default Statistical;
