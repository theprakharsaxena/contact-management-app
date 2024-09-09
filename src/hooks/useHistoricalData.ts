import { useQuery } from "@tanstack/react-query";

const fetchHistoricalData = async () => {
  const res = await fetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  if (!res.ok) {
    throw new Error("Error fetching country data");
  }
  return res.json();
};

export const useHistoricalData = () => {
  const query = useQuery({
    queryKey: ["historicalData"],
    queryFn: () => fetchHistoricalData(),
  });

  return query;
};
