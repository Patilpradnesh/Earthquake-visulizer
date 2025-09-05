import React from "react";
import { useEffect, useState } from "react";

export const EarthquakeData = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const filteredEarthquakes = earthquakes.filter(eq =>
      (eq.properties.place && eq.properties.place.toLowerCase().includes(search.toLowerCase()))||
      (eq.properties.mag && eq.properties.mag.toString().includes(search))
  );


  useEffect(() => {
    fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
    )
      .then((response) => response.json())
      .then((data) => setEarthquakes(data.features))
      .catch(() => setError("Failed to fetch earthquake data"));
  });

  
  return (
    <div className="container my-4">
      <div className="text- py-3 text-center">
        <h2>Global Earthquake Data</h2>
        <p>Up-to-date information</p>
      </div>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search here by Location or Magnitude"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-striped table-border">
        <thead>
          <tr>
            <th>Location</th>
            <th>Magnitude</th>
            <th>Time</th>
            <th>Depth(km)</th>
            <th>Co-ordinates</th>
          </tr>
        </thead>
        <tbody>
          {error || filteredEarthquakes.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center text-danger">
                {error
                  ? "No Data Available. please try again later"
                  : "No Earthquakes Data Found"}
              </td>
            </tr>
          ) : (
            filteredEarthquakes.map((eq) => (
              <tr key={eq.id}>
                <td>{eq.properties.place}</td>
                <td>{eq.properties.mag}</td>
                <td>{new Date(eq.properties.time).toLocaleString()}</td>
                <td>{eq.geometry.coordinates[2]}</td>
                <td>
                  {eq.geometry.coordinates[1]},{eq.geometry.coordinates[0]}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
