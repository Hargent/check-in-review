// import { AxisOptions, Chart } from "react-charts";

// import { DailyStars } from "./type";
// import React from "react";
// import { data } from "./data";

// export default function AppChart() {
//   const AppData = React.useMemo(() => data, []);
//   const primaryAxis = React.useMemo(
//     (): AxisOptions<DailyStars> => ({
//       getValue: (datum) => datum.primary
//     }),
//     []
//   );

//   const secondaryAxes = React.useMemo(
//     (): AxisOptions<DailyStars>[] => [
//       {
//         getValue: (datum) => datum.likes
//       }
//     ],
//     []
//   );

//   return (
//     <Chart
//       style={{ position: "relative", color: "green" }}
//       options={{
//         data: AppData,
//         primaryAxis,
//         secondaryAxes
//         // elementType: "line"
//       }}
//     />
//   );
// }

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
// (
//   <LineChart
//     width={600}
//     height={300}
//     data={data}
//     margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
//   >
//     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//     <XAxis dataKey="name" />
//     <YAxis />
//     <Tooltip />
//   </LineChart>
// );
