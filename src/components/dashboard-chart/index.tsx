import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

// import { data } from "./data";

const data = [
  { primary: "Week 1", Rating: 400 },
  { primary: "Week 2", Rating: 700 },
  { primary: "Week 3", Rating: 300 },
  { primary: "Week 4", Rating: 500 },
  { primary: "Week 5", Rating: 600 },
  { primary: "Week 6", Rating: 700 },
  { primary: "Week 7", Rating: 800 },
  { primary: "Week 8", Rating: 1000 }
];

export const DashBoardChart = () => {
  return (
    <ComposedChart width={730} height={250} data={data}>
      <XAxis dataKey="primary" />
      <YAxis />
      <Tooltip
        contentStyle={{ color: "#005f49", textTransform: "uppercase" }}
      />
      {/* <Legend /> */}
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="Rating" fill="#e2fff8" stroke="#7cffe1" />
      <Bar dataKey="Rating" barSize={20} fill="#1effca" />
      <Line type="monotone" dataKey="Rating" stroke="#005f49" />
    </ComposedChart>
  );
};
