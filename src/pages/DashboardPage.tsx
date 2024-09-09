import Chart from "../components/Chart";
import Map from "../components/Map";
import WorldwideStats from "../components/WorldwideStats";

const DashboardPage = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center my-6">
        COVID-19 Dashboard
      </h1>
      <div className="mb-6">
        <WorldwideStats />
      </div>
      <div className="mb-6">
        <Chart />
      </div>
      <Map />
    </div>
  );
};

export default DashboardPage;
