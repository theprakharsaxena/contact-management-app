import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useCountryData } from "../hooks/useCountryData";

const SetViewOnClick: React.FC<{ center: [number, number]; zoom: number }> = ({
  center,
  zoom,
}) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const Map = () => {
  const { data, isLoading, error } = useCountryData();

  if (isLoading) return <div>Loading Map...</div>;
  if (error) return <div>Error loading map data</div>;

  return (
    <MapContainer style={{ height: "500px", width: "100%" }}>
      <SetViewOnClick center={[20, 0]} zoom={2} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((country: any) => {
        const customIcon = new L.Icon({
          iconUrl: country.countryInfo.flag,
          iconSize: [40, 30],
          iconAnchor: [20, 30],
          popupAnchor: [0, -30],
        });

        return (
          <Marker
            key={country.countryInfo.iso2}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={customIcon}
          >
            <Popup>
              <strong>{country.country}</strong>
              <br />
              Active Cases: {country.active}
              <br />
              Recovered: {country.recovered}
              <br />
              Deaths: {country.deaths}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
