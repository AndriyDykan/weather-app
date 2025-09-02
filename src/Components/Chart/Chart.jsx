import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function Chart({ data }) {
  const chartData = [
    {
      part: "Morning",
      temp: data.temps.morn,
      feels_like: data.feels_like[0],
    },
    {
      part: "Day",
      temp: data.temps.day,
      feels_like: data.feels_like[1],
    },
    {
      part: "Evening",
      temp: data.temps.eve,
      feels_like: data.feels_like[2],
    },
    {
      part: "Night",
      temp: data.temps.night,
      feels_like: data.feels_like[3],
    },
  ];

  return (
    <ResponsiveContainer width="50%" height="50%">
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="part" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="temp" fill="#82ca9d" name="Temperature" />
        <Bar dataKey="feels_like" fill="#8884d8" name="Feels Like" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
