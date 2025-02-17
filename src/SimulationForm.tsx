import Button from "./Button";
import Slider from "./Slider";
import { FormProps } from "./types";

/**
 * SimulationForm Component
 *
 * A form component for configuring EV charging station simulation parameters.
 *
 * The form is divided into several sections:
 * 1. Station Configuration - Set up total stations and add new ones
 * 2. Simulation Parameters - Configure arrival probability and car consumption
 * 3. Power Management - Adjust power levels for individual stations
 *
 * @param submitForm - Form submission handler
 * @param handleAmountOfStations - Updates total number of stations
 * @param errors - Form validation errors
 * @param multiplier - Arrival probability multiplier
 * @param handleMultiplier - Updates arrival probability
 * @param consumption - Car energy consumption
 * @param handleConsumption - Updates car consumption
 * @param chargePoints - Array of active charging stations
 * @param handleChargePower - Updates power for specific station
 * @param hndleAddChargePoint - Adds new charging stations
 * @param power - Default power level for new stations
 * @param handlePower - Updates default power level
 * @param totalStations - Maximum number of stations
 * @param stationAllocation - Number of stations to add
 * @param handleStationAllocation - Updates station allocation
 */
export default function SimulationForm({
  submitForm,
  handleAmountOfStations,
  errors,
  multiplier,
  handleMultiplier,
  consumption,
  handleConsumption,
  chargePoints,
  handleChargePower,
  hndleAddChargePoint,
  power,
  handlePower,
  totalStations,
  stationAllocation,
  handleStationAllocation,
}: FormProps) {
  return (
    <form onSubmit={submitForm} className="space-y-6">
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Total Number of Stations
              </label>
              <input
                type="number"
                value={totalStations}
                onChange={(e) => handleAmountOfStations(Number(e.target.value))}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.amountOfStations && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.amountOfStations}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Stations to Add
              </label>
              <input
                type="number"
                value={stationAllocation}
                onChange={(e) =>
                  handleStationAllocation(Number(e.target.value))
                }
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.stationAllocation && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.stationAllocation}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Charging Speed (kW)
              </label>
              <input
                type="number"
                value={power}
                onChange={(e) => handlePower(Number(e.target.value))}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter power"
              />
              {errors.errorOfPower && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.errorOfPower}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <Button
              onClick={() => hndleAddChargePoint(stationAllocation)}
              size="small"
              disabled={
                !stationAllocation ||
                !power ||
                chargePoints.length >= totalStations
              }
            >
              Add Stations
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded-full">
                {chargePoints.length}/{totalStations} active
              </span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Arrival Probability Multiplier
          </label>
          <Slider
            value={multiplier}
            onChange={handleMultiplier}
            min={20}
            max={200}
            metric="%"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Car Consumption (kWh)
          </label>
          <input
            type="number"
            value={consumption}
            onChange={(e) => handleConsumption(Number(e.target.value))}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.consumption && (
            <p className="text-red-500 text-xs mt-1">{errors.consumption}</p>
          )}
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-700">
              Charging Power (kW)
            </h3>
            <span className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded-full">
              {chargePoints.length} stations
            </span>
          </div>

          {chargePoints.length > 0 ? (
            <div className="space-y-4 max-h-[200px] overflow-y-auto pr-2">
              {chargePoints.map((charger) => (
                <div
                  key={charger.id}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">
                      Station {charger.id}
                    </span>
                    <span className="text-sm font-medium">
                      {charger.power} kW
                    </span>
                  </div>
                  <Slider
                    value={charger.power}
                    min={0}
                    max={11}
                    metric="kw"
                    onChange={(value) =>
                      handleChargePower(charger.id, Number(value))
                    }
                  />
                  {errors[`charge-${charger.id}`] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[`charge-${charger.id}`]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="h-20 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
              <p className="text-gray-400 text-sm">
                No active charging stations
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="w-full text-center">
        <Button
          size="large"
          type="submit"
          variant="primary"
          disabled={chargePoints.length === 0}
        >
          Simulate
        </Button>
      </div>
    </form>
  );
}
