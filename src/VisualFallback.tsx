import Card from "./Card";

/**
 * VisualizationFallback Component
 *
 * A placeholder component that displays the structure of the visualization dashboard
 * before the simulation data is submitted. It serves multiple purposes:
 *
 * 1. Provides users with a preview of what to expect after form submission
 * 2. Uses skeleton loading patterns (animate-pulse) to indicate inactive state
 *
 */
const VisualizationFallback = () => {
  return (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total Energy (kWh)">
          <div className="h-8 bg-gray-200 rounded-md w-3/4 mx-auto" />
        </Card>
        <Card title="Peak Power (kW)">
          <div className="h-8 bg-gray-200 rounded-md w-3/4 mx-auto" />
        </Card>
        <Card title="Daily Events">
          <div className="h-8 bg-gray-200 rounded-md w-3/4 mx-auto" />
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Charging Power per Chargepoint">
          <div className="h-[150px] bg-gray-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
        </Card>

        <Card title="Total Energy Consumption">
          <div className="h-[150px] bg-gray-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Charging Events, Max Power Demand & Energy Consumption">
          <div className="h-[150px] bg-gray-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </Card>

        <Card title="The Events">
          <div className="h-[150px] bg-gray-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
        </Card>
      </div>

      <div className="text-center text-gray-500 mt-4">
        <p className="text-xs">
          Submit the form to view your simulation results
        </p>
      </div>
    </div>
  );
};

export default VisualizationFallback;
