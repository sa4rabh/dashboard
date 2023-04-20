import React, { useState } from "react";
import { Line } from 'react-chartjs-2';
import classNames from "classnames";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

const Activities = () => {
    const [selectedMonth, setSelectedMonth] = useState("January");

    // Sample data for the chart
    const [data, setData] = useState({
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Guest",
                data: [200, 400, 200, 300],
                fill: false,
                borderColor: "#f59e0b",
            },
            {
                label: "User",
                data: [0, 400, 50, 450],
                fill: false,
                borderColor: "#10b981",
            },
        ],
    });

    // Options for the chart
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 5,
                    },
                },
            ],
        },
        elements: {
            line: {
                tension: 0.4,
            },
        },
    };

    // Handle dropdown change
    const handleSelectMonth = (e) => {
        const selectedMonth = e.target.value;
        setSelectedMonth(selectedMonth);
        let guestData = [];
        let userData = [];
        switch (selectedMonth) {
            case "January":
                guestData = [200, 400, 200, 300];
                userData = [310, 400, 50, 450];
                break;
            case "February":
                guestData = [300, 200, 450, 100];
                userData = [430, 200, 250, 400];
                break;
            case "March":
                guestData = [300, 200, 450, 100];
                userData = [340, 200, 250, 400];
                break;
            case "April":
                guestData = [300, 200, 450, 100];
                userData = [210, 200, 250, 400];
                break;
            case "May":
                guestData = [300, 140, 450, 100];
                userData = [500, 200, 250, 170];
                break;
            case "June":
                guestData = [300, 170, 450, 100];
                userData = [1500, 200, 250, 400];
                break;
            case "July":
                guestData = [300, 400, 450, 100];
                userData = [120, 200, 150, 400];
                break;
            case "August":
                guestData = [300, 200, 450, 100];
                userData = [220, 200, 50, 400];
                break;
            case "September":
                guestData = [300, 200, 450, 100];
                userData = [170, 200, 250, 400];
                break;
            case "October":
                guestData = [300, 200, 450, 100];
                userData = [0, 200, 250, 400];
                break;
            case "November":
                guestData = [200, 100, 450, 10];
                userData = [0, 200, 250, 400];
                break;
            case "December":
                guestData = [150, 250, 500, 120];
                userData = [140, 0, 400, 200];
                break;
            // add cases for other months
            default:
                break;
        }
        setData({
            ...data,
            datasets: [
                {
                    ...data.datasets[0],
                    data: guestData,
                },
                {
                    ...data.datasets[1],
                    data: userData,
                },
            ],
        });
    };

    return (
        <div className="">
            <div className="bg-white rounded-lg shadow-lg pl-5">
                <h2 className="text-lg font-bold">Activities ({selectedMonth})</h2>
                <select value={selectedMonth} onChange={handleSelectMonth}>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <div className="p-4">
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default Activities;
