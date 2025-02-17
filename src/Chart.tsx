import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ChartProps } from "./types";

/**
 *
 * Chart Component
 *
 * A reusable chart component that uses recharts inside.
 */
function Chart<T>({
  data,
  xAxisDataKey = "name",
  xAxisFormatter,
  yAxisFormatter,
  bars,
}: ChartProps<T>) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey={xAxisDataKey}
          tickFormatter={xAxisFormatter}
          fontSize={12}
        />
        <YAxis fontSize={12} tickFormatter={yAxisFormatter} />
        <Tooltip cursor={{ fill: "#f3f4f6" }} />
        <Legend />
        {bars.map((bar) => (
          <Bar
            key={bar.dataKey}
            dataKey={bar.dataKey}
            fill={bar.fill}
            barSize={20}
            radius={[10, 10, 0, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
