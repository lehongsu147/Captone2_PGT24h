import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import { Bar, Pie } from "react-chartjs-2";
import Constants from './../../../../utils/constants';

const Statistical = () => {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 10, 5, 2, 20, 30, 45],
            },
        ],
    };
    return (
        <div>
        
            <Bar data={data} />
        </div>
    );

};

export default Statistical;
