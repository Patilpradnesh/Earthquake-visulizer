import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const About = () => {
  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">
            About Earthquake Visualizer
          </h2>
          <p className="card-text">
            <strong>Earthquake Visualizer</strong> is a modern web application
            designed to help users explore and understand recent earthquake
            activity around the world. The app fetches real-time data from the{" "}
            <a
              href="https://earthquake.usgs.gov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              USGS Earthquake API
            </a>{" "}
            and displays it on an interactive map, allowing users to visualize
            seismic patterns and access detailed information about each event.
          </p>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">
               Interactive world map with earthquake markers
            </li>
            <li className="list-group-item">
               Color-coded and sized markers by magnitude
            </li>
            <li className="list-group-item">
               Popups with location, magnitude, and time
            </li>
            <li className="list-group-item">
               List and table views of earthquake data
            </li>
            <li className="list-group-item">
                 Responsive, user-friendly design
            </li>
          </ul>
          <p className="card-text">
            <strong>Data Source:</strong>{" "}
            <a
              href="https://earthquake.usgs.gov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              USGS (United States Geological Survey)
            </a>
            <br />
            <strong>Developer:</strong> Pradnesh Patil
          </p>
        </div>
      </div>
    </div>
  );
};
