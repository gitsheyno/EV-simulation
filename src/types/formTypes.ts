export type FormProps = {
  submitForm: (e: React.FormEvent) => void;
  multiplier: number;
  consumption: number;
  chargePoints: { id: number; power: number }[];
  errors: Record<string, string>;
  handleChargePower: (id: number, value: number) => void;
  handleAmountOfStations: (value: number) => void;
  handleMultiplier: (value: number) => void;
  handleConsumption: (value: number) => void;
  hndleAddChargePoint: (value: number) => void;
  power: number;
  handlePower: (value: number) => void;
  totalStations: number;
  handleStationAllocation: (value: number) => void;
  stationAllocation: number;
};
