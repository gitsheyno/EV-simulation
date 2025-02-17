import { SliderProps } from "./types";

/**
 *
 * Slider Component
 *
 * A range slider component that shows current, min, and max values.
 *
 * @param value - Current value of the slider
 * @param onChange - Handler function when slider value changes
 * @param min - Minimum value of the slider
 * @param max - Maximum value of the slider
 * @param metric - Unit to display after the values (e.g., "kW", "%")
 *
 */
const Slider = ({ value, onChange, min, max, metric }: SliderProps) => {
  const percentage = ((value - min) / (max - min)) * 100;
  return (
    <div className="relative py-2">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
        }}
      />
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>
          {min}
          {metric}
        </span>
        <span>
          {value}
          {metric}
        </span>
        <span>
          {max}
          {metric}
        </span>
      </div>
    </div>
  );
};

export default Slider;
