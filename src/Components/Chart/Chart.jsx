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
    <div className=" shadow-custom bg-zinc-300 rounded-xl p-5 h-[300px] w-[70%]">
      <ResponsiveContainer width="100%" height="100%">
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
    </div>
  );
}

export default Chart;
