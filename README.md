# EV Charging Station Simulation

A React-based web application for simulating and visualizing electric vehicle charging station behavior and metrics.

## Features

- **The Input parameters**

  - the number of charge points
  - a multiplier for the arrival probability to increase the amount of cars arriving to charge (20-200%,
    default: 100%)
  - the consumption of the cars (default: 18 kWh)
  - the charging power per chargepoint (default: 11 kW)

- **The output**

  - The charging values (in kW) per chargepoint at a usef
    ul aggregation level
  - An exemplary day
  - The total energy charged (in kWh)
  - The number of charging events per year/month/week/day
  - The amount of charging events/actual max power demand/energy consumed per day/week/month as
    a bar chart/heatmap

- **Considerations**
  - Form validation
  - Form submission handling
  - Responsiveness
  - Usability

## Technology Stack

- React
- TypeScript
- Tailwind CSS
- Recharts for data visualization
- Zod for form validation

## Installation

1. Clone the repository:

```bash
git clone https://github.com/gitsheyno/EV-simulation.git
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5174`

## Project Structure

```
src/
├── components/
│   ├── ChargePointForm/        # Main parent for form and visualization
│   ├── SimulationForm/         # Main form for configuration
│   ├── Visualization/          # Charts and metrics display
│   ├── Chart/                  # Reusable Charts
│   ├── VisualizationFallback/  # Loading state placeholder
│   ├── Button/                 # Reusable button component
│   ├── Card/                   # Container component
│   └── Slider/                 # Power adjustment slider
├── utilities/
│   └── ZodSchemas/             # Form validation schemas
└── types/                      # TypeScript type definitions
```

## Configuration Options

### Station Settings

- Total number of stations: 1-20 stations
- Power range: 0-11 kW per station
- Allocation increment: Configurable batch size

### Simulation Parameters

- Arrival probability: 20-200%
- Vehicle consumption: Configurable kWh

## Deployment

- https://ev-simulation.vercel.app/

## Future Enhancements

Potential improvements:

- adding state mnagements to scale it even better
- adding authentication
