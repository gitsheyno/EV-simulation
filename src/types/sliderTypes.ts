export type SliderProps = {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  metric: "%" | "kw";
};
