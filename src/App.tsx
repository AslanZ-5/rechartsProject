import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];
const percentage = 100 - ((7 - 4 - 1) / (7 - 1)) * 100;

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;
  const { name } = payload;
  if (name[5] == "E" || name[5] == "F" || name[5] == "G") {
    return (
      <svg x={cx - 4} y={cy - 4} width={8} height={8} fill="red">
        <g transform="translate(4 4)">
          <circle r="4" fill="red" />
          <circle r="2" fill="red" />
        </g>
      </svg>
    );
  }

  return (
    <svg x={cx - 4} y={cy - 4} width={8} height={8} fill="#8884d8">
      <g transform="translate(4 4)">
        <circle r="4" fill="#8884d8" />
        <circle r="2" fill="#8884d8" />
      </g>
    </svg>
  );
};

export default function App() {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="#8884d8" />
          <stop offset={`${percentage}%`} stopColor="#8884d8" />
          <stop offset={`${percentage}%`} stopColor="red" />
          <stop offset="100%" stopColor="red" />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="url(#gradient)"
        activeDot={false}
        dot={<CustomizedDot />}
      />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="url(#gradient)"
        activeDot={false}
        dot={<CustomizedDot />}
      />
    </LineChart>
  );
}

//8884d8
