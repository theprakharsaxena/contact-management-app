import { useQuery } from "@tanstack/react-query";

const fetchCountryData = async () => {
  const res = await fetch("https://disease.sh/v3/covid-19/countries");
  if (!res.ok) {
    throw new Error("Error fetching country data");
  }
  return res.json();
};

export const useCountryData = () => {
  const query = useQuery({
    queryKey: ["countryData"],
    queryFn: () => fetchCountryData(),
  });

  return query;
};
