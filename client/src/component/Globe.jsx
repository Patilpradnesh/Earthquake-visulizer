import React, { useRef ,useEffect} from "react";
import Globe from "react-globe.gl";



function Global() {
  const globeRef = useRef();

  useEffect(() => {
    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 1;
  }, []);
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      />
    </div>
  );
}
export default Global;
