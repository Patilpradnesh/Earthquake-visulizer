import { Route, Routes } from "react-router-dom";

import Navbar from './component/Navbar';
import {Footer} from './component/Footer';
import {Home} from './pages/Home';
import {EarthquakeMap} from './pages/EarthquakeMap';
import {EarthquakeData} from './pages/EarthquakeData';
import {Error} from  './pages/Error';
import { About } from "./pages/about";



const App=()=>{
  return (
    <>
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/map" element={<EarthquakeMap/>}/>
          <Route path="/Data" element={<EarthquakeData/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
     
      <Footer/>
    </>
  )
}
export default App