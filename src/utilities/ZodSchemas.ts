import { z } from "zod";

export const chargePowerSchema = z
  .number()
  .int("Charging power must be an integer")
  .min(0, "Charging power cannot be negative")
  .max(11, "cannot exceed 11 kW");

export const numberOfStationsSchema = z
  .number()
  .int("Number of charge points must be an integer")
  .min(1, "There must be at least one charge point")
  .max(20, " cannot exceed 20");

export const consumptionSchema = z
  .number()
  .min(1, "Car consumption must be at least 1 kWh")
  .max(100, "Car consumption cannot exceed 100 kWh");
