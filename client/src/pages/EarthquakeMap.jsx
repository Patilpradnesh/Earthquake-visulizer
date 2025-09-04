import React from 'react'
import {MapContainer,TileLayer} from 'react-leaflet';
import { CircleMarker,Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import  { useEffect,useState } from 'react';


export const EarthquakeMap=()=> {
  const[earthquakes,setEarthquakes]=useState([]);
  const[error,setError]=useState(null);


  useEffect(()=>{
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
    .then(response=>response.json())
    .then(data=>setEarthquakes(data.features))
    .catch(()=> setError('Failed to fetch earthquake data'));
  },[]);
  return (
   
    <div className= "container-fluid p-0 mb-5">
        
        <div className="text- py-3 text-center">
            <h2>Global Earthquake Map</h2>
            <p>Use Zoom and  pan to explore</p>
        </div>
        {error &&(
            <div className='alert alert-danger text-center m-5' role="alert">
                {error}
            </div>

        )}
      
      <MapContainer center={[50,20]} zoom={2} style={{ height: "600px", width: "100%", maxWidth: "1200px", margin: "0 auto", borderRadius: "16px", boxShadow: "0 4px 24px rgba(0,0,0,0.2)" }}>
        <TileLayer   
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; openStreetMap contributors"
        />
        {earthquakes.map(eq => {
          const mag = eq.properties.mag;
          let color = 'green';
          if (mag >= 5) color = 'red';
          else if (mag >= 3) color = 'orange';

          return (
            <CircleMarker
              key={eq.id}
              center={[
                eq.geometry.coordinates[1],
                eq.geometry.coordinates[0]
              ]}
              radius={mag * 2}
              color={color}
              fillColor={color}
              fillOpacity={0.7}
              stroke={false}
            >
              <Popup>
                <strong>Magnitude:</strong> {mag}<br />
                <strong>Location:</strong> {eq.properties.place}<br />
                <strong>Time:</strong> {new Date(eq.properties.time).toLocaleString()}
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>

   
  )
}

