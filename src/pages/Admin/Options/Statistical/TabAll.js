import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Select, DatePicker } from "antd";

const labels = ["January", "February", "March", "April", "May", "June"];


const fetchData = (selectedCategory, selectedDate) => {
  // Dựa vào selectedCategory và selectedDate để tải dữ liệu thực tế từ API hoặc trả về dữ liệu thay thế.
  // Ví dụ dữ liệu thay thế:
  if (selectedCategory === "1") {
    return {
      labels: labels,
      datasets: [
        {
          label: "Thu vào tiền",
          backgroundColor: "rgb(255, 99, 132)",
          data: [125000000, 150000000, 320000000, 130000000, 145000000, 245000000]
        }
      ]
    };
  } else {
    return {
      labels: labels,
      datasets: [
        {
          label: "Tổng số lượng lượt thuê",
          backgroundColor: "rgb(54, 162, 235)",
          data: [4000, 2000, 1300, 2900, 2040, 7000]
        }
      ]
    };
  }
};


const TabAll = ({ selectedCategory, selectedDate }) => {

  const data1 = {
    labels: labels,
    datasets: [
      {
        label: "Thu vào tiền",
        backgroundColor: "rgb(255, 99, 132)",
        data: [125000000, 150000000, 320000000, 130000000, 145000000, 245000000]
      }
    ]
  };
  const data2 = {
    labels: labels,
    datasets: [
      {
        label: "Tổng số lượng lượt thuê",
        backgroundColor: "rgb(54, 162, 235)",
        data: [4000, 2000, 1300, 2900, 2040, 7000]
      }
    ]
  };

  const [barData1, setBarData1] = useState(data1);
  const [barData2, setBarData2] = useState(data2);

  useEffect(() => {
    if (selectedCategory && selectedDate) {
      // Tại đây, bạn cần cập nhật barData1 và barData2 dựa trên selectedCategory và selectedDate.
      // Ví dụ: Tạo hàm fetchData(selectedCategory, selectedDate) để tải dữ liệu từ API hoặc dữ liệu thay thế.
      // Sau đó, cập nhật barData1 và barData2 bằng dữ liệu mới từ fetchData.
      const updatedData1 = fetchData(selectedCategory, selectedDate); // Gọi hàm fetchData với các tham số tương ứng.
      const updatedData2 = fetchData(selectedCategory, selectedDate); // Gọi hàm fetchData với các tham số tương ứng.
      setBarData1(updatedData1);
      setBarData2(updatedData2);
    }
  }, [selectedCategory, selectedDate]);

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: 'column', gap: 50, alignItems: 'center', justifyContent: 'space-start' }}>
        <Bar
          style={{ height: 300, width: "45%" }}
          data={barData1}
          options={options}
        />
        <Bar
          style={{ height: 200, width: "45%" }}
          data={barData2}
          options={options}
        />
      </div>
    </div>
  );
};

export default TabAll;
