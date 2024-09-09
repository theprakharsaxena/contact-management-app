import { useQuery } from "@tanstack/react-query";

const fetchWorldwideData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/all");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useWorldwideData = () => {
  const query = useQuery({
    queryKey: ["worldwideData"],
    queryFn: () => fetchWorldwideData(),
  });

  return query;
};
