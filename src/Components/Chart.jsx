import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Chart({ data }) {
  const chartData = [
    {
      part: "Morning",
      temp: Math.round(data.temps.morn),
      feels_like: Math.round(data.feels_like[0]),
    },
    {
      part: "Day",
      temp: Math.round(data.temps.day),
      feels_like: Math.round(data.feels_like[1]),
    },
    {
      part: "Evening",
      temp: Math.round(data.temps.eve),
      feels_like: Math.round(data.feels_like[2]),
    },
    {
      part: "Night",
      temp: Math.round(data.temps.night),
      feels_like: Math.round(data.feels_like[3]),
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="75%">
      <LineChart data={chartData} margin={{ bottom: 10, right: 10, left: 0 }}>
        <CartesianGrid stroke="grey" strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="part" tickMargin={15} />
        <YAxis
          domain={["dataMin - 2", "dataMax + 2"]}
          tickMargin={20}
          tickFormatter={(value) => `${value}°`}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="temp"
          stroke="black"
          name="Temperature"
          strokeWidth={2}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
