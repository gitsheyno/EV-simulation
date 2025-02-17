import Card from "./Card";
import { VisualizationProps } from "./types";
import Chart from "./Chart";

/** Visualization Component
 *
 * Displays various metrics and charts related to EV charging stations:
 * - Summary cards showing key metrics
 * - Energy consumption patterns
 * - Combined metrics visualization
 * - Charging events frequency
 *
 * @param chargePoints - Array of charging stations with their power ratings
 * @param multiplier -  probability to increase the amount of cars arriving to charge
 * @param consumptionPerCar - Average energy consumption per vehicle
 */
const Visualization = ({
  chargePoints,
  multiplier,
  consumptionPerCar,
}: VisualizationProps) => {
  const numStations = chargePoints.length;
  const estimatedCarsPerDay = numStations * 10 * multiplier;
  const dailyEnergy = estimatedCarsPerDay * consumptionPerCar;
  const monthlyEnergy = dailyEnergy * 30;
  const weeklyEnergy = dailyEnergy * 7;

  /**
   * Prepare data for energy consumption chart
   */
  const energyConsumptionData = [
    { name: "Daily", energy: dailyEnergy },
    { name: "Weekly", energy: weeklyEnergy },
    { name: "Monthly", energy: monthlyEnergy },
  ];

  /**
   * Prepare peakload
   */
  const peakLoad = chargePoints.reduce((sum, cp) => sum + cp.power, 0);

  /**
   * Prepare data for combined metrics chart
   */
  const timeBasedData = [
    {
      name: "Day",
      events: estimatedCarsPerDay,
      power: peakLoad,
      energy: dailyEnergy,
    },
    {
      name: "Week",
      events: estimatedCarsPerDay * 7,
      power: peakLoad,
      energy: dailyEnergy * 7,
    },
    {
      name: "Month",
      events: estimatedCarsPerDay * 30,
      power: peakLoad,
      energy: monthlyEnergy,
    },
  ];
  /**
   * Prepare data for events chart
   */
  const eventsData = [
    {
      name: "day",
      events: estimatedCarsPerDay,
    },
    {
      name: "week",
      events: estimatedCarsPerDay * 7,
    },
    {
      name: "month",
      events: estimatedCarsPerDay * 30,
    },
  ];

  return (
    <div className="space-y-6 p-6 bg-gray-100 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total Energy (kWh)">{dailyEnergy} kWh/day</Card>
        <Card title="Peak Power (kW)">{peakLoad} kW</Card>
        <Card title="Daily Events">{estimatedCarsPerDay} events/day</Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Charging Power per Chargepoint">
          <Chart
            data={chargePoints}
            xAxisDataKey="id"
            xAxisFormatter={(id) => `${id}`}
            yAxisFormatter={(value) => `${value} kW`}
            bars={[{ dataKey: "power", fill: "#3b82f6" }]}
          />
        </Card>

        <Card title="Total Energy Consumption">
          <Chart
            data={energyConsumptionData}
            bars={[{ dataKey: "energy", fill: "#f97316" }]}
            yAxisFormatter={(value) => `${value} kWh`}
          />
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Charging Events, Max Power Demand & Energy Consumption">
          <Chart
            data={timeBasedData}
            bars={[
              { dataKey: "events", fill: "#34d399" },
              { dataKey: "power", fill: "#ef4444" },
              { dataKey: "energy", fill: "#3b82f6" },
            ]}
          />
        </Card>

        <Card title="The Events">
          <Chart
            data={eventsData}
            bars={[{ dataKey: "events", fill: "#34d399" }]}
          />
        </Card>
      </div>
    </div>
  );
};

export default Visualization;
