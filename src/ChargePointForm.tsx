import React, { useState } from "react";
import ChargingVisualization from "./Visual";
import Card from "./Card";
import SimulationForm from "./SimulationForm";
import VisualizationFallback from "./VisualFallback";
import {
  chargePowerSchema,
  numberOfStationsSchema,
  consumptionSchema,
} from "./utilities/ZodSchemas";

/**
 * EV Charging Simulator Component
 *
 * simulates electric vehicle charging stations behavior.
 * 1. configure stations
 * 2. allows users to configure multiple charging points,
 * 3. sets power levels events,
 * 4. sets energy consumption,
 * 5. visualize the charging simulation.
 *
 */
const EVChargingSimulator = () => {
  const [chargePoints, setChargePoints] = useState<
    {
      id: number;
      power: number;
    }[]
  >([]);
  const [multiplier, setMultiplier] = useState<number>(100);
  const [consumption, setConsumption] = useState<number>(18);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [power, setPower] = useState<number>(11);
  const [stationAllocation, setStationAllocation] = useState<number>(0);
  const [totalStations, setTotalStations] = useState<number>(0);

  /**
   * Handles the allocation of new charging stations
   * Validates the input and ensures it doesn't exceed total station limit
   */
  const handleStationAllocation = (value: number) => {
    const result = numberOfStationsSchema.safeParse(value);
    setErrors((prev) => ({
      ...prev,
      stationAllocation: result.success ? "" : result.error.errors[0].message,
    }));

    if (totalStations === 0) {
      setErrors((prev) => ({
        ...prev,
        stationAllocation: result.error?.errors[0].message || "",
      }));
    }

    if (result.success) {
      if (value > totalStations) {
        setErrors((prev) => ({
          ...prev,
          stationAllocation: `Cannot exceed total stations (${totalStations})`,
        }));
        return;
      }
      setStationAllocation(value);
    }
  };

  /**
   * Adds new charge points to the simulation
   * Creates multiple stations with the current power setting
   */
  const hndleAddChargePoint = (value: number) => {
    if (!value || value <= 0) {
      return;
    }

    const futureTotal = chargePoints.length + value;
    if (futureTotal > totalStations) {
      setErrors((prev) => ({
        ...prev,
        stationAllocation: `Cannot exceed total stations (${totalStations})`,
      }));
      return;
    }

    setChargePoints((prevChargePoints) => [
      ...prevChargePoints,
      ...Array.from({ length: value }, (_, index) => ({
        id: prevChargePoints.length + index + 1,
        power,
      })),
    ]);

    setStationAllocation(0);
  };

  /**
   * Handles form submission and triggers visualization
   */
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  /**
   * Updates the multiplier
   */
  const handleMultiplier = (value: number) => {
    setMultiplier(value);
  };

  /**
   * Updates the power level for a specific charging station
   */
  const handleChargePower = (id: number, value: number) => {
    const result = chargePowerSchema.safeParse(value);
    setErrors((prev) => ({
      ...prev,
      [`charge-${id}`]: result.success ? "" : result.error.errors[0].message,
    }));
    if (result.success) {
      setChargePoints((prev) =>
        prev.map((item) => (item.id === id ? { ...item, power: value } : item))
      );
    }
  };

  /**
   * Sets the default power level for new charging stations
   */
  const handlePower = (value: number) => {
    const result = chargePowerSchema.safeParse(value);
    setErrors((prev) => ({
      ...prev,
      errorOfPower: result.success ? "" : result.error.errors[0].message,
    }));
    if (result.success) setPower(value);
  };

  /**
   * Updates the consumption rate per vehicle
   */
  const handleConsumption = (value: number) => {
    const result = consumptionSchema.safeParse(value);
    setErrors((prev) => ({
      ...prev,
      consumption: result.success ? "" : result.error.errors[0].message,
    }));
    if (result.success) setConsumption(value);
  };

  /**
   * Sets the total number of available charging stations
   */
  const handleAmountOfStations = (value: number) => {
    const result = numberOfStationsSchema.safeParse(value);
    setErrors((prev) => ({
      ...prev,
      amountOfStations: result.success ? "" : result.error.errors[0].message,
    }));
    if (result.success) {
      setTotalStations(value);
      setStationAllocation(0);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4">
          <Card>
            <SimulationForm
              submitForm={handleFormSubmit}
              handleAmountOfStations={handleAmountOfStations}
              errors={errors}
              handleMultiplier={handleMultiplier}
              multiplier={multiplier}
              consumption={consumption}
              handleConsumption={handleConsumption}
              chargePoints={chargePoints}
              handleChargePower={handleChargePower}
              hndleAddChargePoint={hndleAddChargePoint}
              power={power}
              handlePower={handlePower}
              handleStationAllocation={handleStationAllocation}
              totalStations={totalStations}
              stationAllocation={stationAllocation}
            />
          </Card>
        </div>

        <div className="lg:col-span-8">
          {submitted ? (
            <div className="h-full">
              <ChargingVisualization
                chargePoints={chargePoints}
                multiplier={multiplier * 0.01}
                consumptionPerCar={consumption as number}
              />
            </div>
          ) : (
            <VisualizationFallback />
          )}
        </div>
      </div>
    </div>
  );
};

export default EVChargingSimulator;
