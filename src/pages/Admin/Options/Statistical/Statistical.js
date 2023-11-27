import React, { useState } from "react";
import { DatePicker, Select, Tabs } from "antd";
import ChartYear from "./ChartYear";

const Statistical = () => {
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState();
  const [week, setWeek] = useState();

  const handleChangeYear = key => {
    setYear(key?.$y)
  };
  const handleChangeMonth = key => {
    setMonth(key?.month() + 1)
  };
  const handleChangeWeek = key => {
    console.log("🚀 ~ file: Statistical.js:30 ~ handleOnChangeMonth ~ key:", key)
  };

  return (
    <div className="booking-container" style={{ overflow: 'scroll', height: '100vh' }}>
      <div className="booking-title">
        <span>Thống kê</span>
      </div>

      <div className="booking-title">
        <div style={{ float: 'right', display: 'flex', gap: 15 }}>
          <DatePicker onChange={handleChangeYear} picker="year" placeholder="Năm" />
          <DatePicker onChange={handleChangeMonth} picker="month"  placeholder="Tháng"  />
          {/* <DatePicker onChange={handleChangeWeek} picker="week"  placeholder="Ngày" /> */}
        </div>
      </div>

      <div className="booking-search" style={{ width: '100%' }}>
        <ChartYear year={year} month={month} />
      </div>
    </div>
  );
};

export default Statistical;
