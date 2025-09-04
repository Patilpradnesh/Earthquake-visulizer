import React, { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Globe from "../component/Globe";
import { Link } from "react-router-dom";

export const Home = () => {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current && globeRef.current.controls) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1;
    }
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
     
      <div style={{
        position: "absolute",
        top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0,
        pointerEvents: "none", display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        <Globe ref={globeRef} />
      </div>

    
      <div style={{
        position: "absolute",
        top: "50%",
        left: "5%",
        transform: "translateY(-50%)",
        zIndex: 1,
        width: "300px"
      }}>
        <div className=" bg-opacity-75 p-4 rounded shadow text-light">
          <h2>Welcome!</h2>
          <p>
            Explore recent earthquake activity around the world.<br />
            Visualize seismic events on an interactive globe.
          </p>
        </div>
      </div>

      
      <div style={{
        position: "absolute",
        top: "50%",
        right: "5%",
        transform: "translateY(-50%)",
        zIndex: 1,
        width: "300px"
      }}>
        <div className=" bg-opacity-75 p-4 rounded shadow text-light">
          <h2>Navigate Towards Information</h2>
          <ul className="list-unstyled">
            <li><Link to="/about" className="btn btn-outline-info btn-block mb-2">About</Link></li>
            <li><Link to="/map" className="btn btn-outline-info btn-block mb-2">View Map</Link></li>
            <li><Link to="/data" className="btn btn-outline-info btn-block mb-2">Earthquake List</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
