export type ChartProps<T> = {
  data: T[];
  xAxisDataKey?: string;
  xAxisFormatter?: (value: string) => string;
  yAxisFormatter?: (value: string) => string;
  bars: {
    dataKey: string;
    fill: string;
  }[];
};
