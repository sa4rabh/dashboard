import React, { useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

function TopProducts() {
    // state for storing the selected date
    const [selectedMonth, setSelectedMonth] = useState("January");

    const handleSelectMonth = (e) => {
        setSelectedMonth(e.target.value);
    };

    // data for the pie chart for each month
    const dataByMonth = {
        January: [
            { name: "Basic Tees", value: 55 },
            { name: "Custom Short Pants", value: 31 },
            { name: "Super Hoodies", value: 14 },
        ],
        February: [
            { name: "Basic Tees", value: 40 },
            { name: "Custom Short Pants", value: 45 },
            { name: "Super Hoodies", value: 15 },
        ],
        March: [
            { name: "Basic Tees", value: 20 },
            { name: "Custom Short Pants", value: 60 },
            { name: "Super Hoodies", value: 20 },
        ],
        April: [
            { name: "Basic Tees", value: 30 },
            { name: "Custom Short Pants", value: 60 },
            { name: "Super Hoodies", value: 10 },
        ],
        May: [
            { name: "Basic Tees", value: 33 },
            { name: "Custom Short Pants", value: 33 },
            { name: "Super Hoodies", value: 34 },
        ],
        June: [
            { name: "Basic Tees", value: 5 },
            { name: "Custom Short Pants", value: 75 },
            { name: "Super Hoodies", value: 20 },
        ],
        July: [
            { name: "Basic Tees", value: 45 },
            { name: "Custom Short Pants", value: 10 },
            { name: "Super Hoodies", value: 45 },
        ],
        August: [
            { name: "Basic Tees", value: 17 },
            { name: "Custom Short Pants", value: 23 },
            { name: "Super Hoodies", value: 60 },
        ],
        September: [
            { name: "Basic Tees", value: 58 },
            { name: "Custom Short Pants", value: 22 },
            { name: "Super Hoodies", value: 20 },
        ],
        October: [
            { name: "Basic Tees", value: 10 },
            { name: "Custom Short Pants", value: 10 },
            { name: "Super Hoodies", value: 80 },
        ],
        November: [
            { name: "Basic Tees", value: 90 },
            { name: "Custom Short Pants", value: 5 },
            { name: "Super Hoodies", value: 5 },
        ],
        December: [
            { name: "Basic Tees", value: 67 },
            { name: "Custom Short Pants", value: 13 },
            { name: "Super Hoodies", value: 20 },
        ],
    };

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]; // colors for the pie chart divisions

    // function for rendering the pie chart sectors
    const renderActiveShape = (props) => {
        const { cx, cy, midAngle, innerRadius, outerRadius, fill, value } = props;
        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                    {`${value}%`}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={midAngle - 90}
                    endAngle={midAngle + 90}
                    fill={fill}
                />
            </g>
        );
    };

    // data for the pie chart based on the selected month
    const data = dataByMonth[selectedMonth];

    return (
        <div className="flex bg-white rounded-lg shadow-lg px-5 py-5">
            <div className="">
                <div className="flex justify-between date-dropdown">
                    <h2 className="text-lg font-bold">Top Products ({selectedMonth})</h2>
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
                </div>
                <div className="flex pie-chart">
                    <PieChart width={200} height={200}>
                        <Pie data={data} cx={100} cy={100} outerRadius={65}>
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                    </PieChart>

                    <div className="product-details">
                        {data.map((entry, index) => (
                            <div key={`product-${index}`} className="flex items-center mb-2">
                                <div
                                    className="rounded-full h-4 w-4 mr-2"
                                    style={{ backgroundColor: COLORS[index % COLORS.length] }}

                                ></div>
                                <div>
                                    <p className="text-sm font-semibold">{entry.name}</p>
                                    <div className="text-xs ml-5 font-light">{entry.value} %</div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TopProducts;