import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useHistoricalData } from "../hooks/useHistoricalData";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const { data, isLoading } = useHistoricalData();
  console.log(data, "+++++");

  if (isLoading) return <p>Loading...</p>;

  const dates = Object.keys(data.cases);
  const cases = Object.values(data.cases);
  const deaths = Object.values(data.deaths);
  const recovered = Object.values(data.recovered);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: "COVID-19 Cases",
        data: cases,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
      },
      {
        label: "Deaths",
        data: deaths,
        borderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.2)",
        pointBorderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "#fff",
      },
      {
        label: "Recovered",
        data: recovered,
        borderColor: "rgba(54,162,235,1)",
        backgroundColor: "rgba(54,162,235,0.2)",
        pointBorderColor: "rgba(54,162,235,1)",
        pointBackgroundColor: "#fff",
      },
    ],
  };

  return <Line data={chartData} />;
};

export default Chart;
