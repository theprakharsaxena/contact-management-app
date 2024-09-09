import { useWorldwideData } from "../hooks/useWorldwideData";

const WorldwideStats = () => {
  const { data, isLoading, error } = useWorldwideData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">
        Worldwide COVID-19 Stats
      </h1>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Cases</h2>
          <p className="text-xl">{data?.cases.toLocaleString()}</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Total Deaths</h2>
          <p className="text-xl">{data?.deaths.toLocaleString()}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Recovered</h2>
          <p className="text-xl">{data?.recovered.toLocaleString()}</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Active Cases</h2>
          <p className="text-xl">{data?.active.toLocaleString()}</p>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-center">
          Last updated: {new Date(data?.updated).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default WorldwideStats;
