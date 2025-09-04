import React from "react";
import { useEffect, useState } from "react";

export const EarthquakeData = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [error, setError] = useState(null);

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
          {error || earthquakes.length ===0 ? (
            <tr>
              <td colSpan='5' className="text-center text-danger">
                {error?"No Data Available. please try again later":"No Earthquakes Data Found"}
              </td>
            </tr>
          ):(
              earthquakes.map(eq =>(
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
