import './App.css';
import {useEffect, useState} from "react";

/**
 * function name `App` creates state of 
 * @param long - longitude 
 * @param lat -latitude
 * using useEffect to load the functions with the app is loaded and reloaded. 
 * @returns state of long and lat and sets 
 */

export default function App() {
  //create two states for longitude and latitude
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  //const [data, setData] = useState([]);
  console.log(process.env.REACT_APP_API_KEY);
  console.log(process.env.REACT_APP_API_URL);
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => console.log(res))
      
    }
    fetchData();
  }, [lat,long])
  
  return (
    <div className="App">
      <header className="header">
        <h1>The Weather App</h1>
        <input type="search" className="input" placeholder="Search..." />
        <button>Search</button>
      </header>
      <main>
        <div className="group">
          <strong>Location: </strong>
          <span></span>
        </div>
        <div className="group">
          <strong>Temperature:</strong>
          <span>c&#176;</span>
        </div>
      </main>
     
    </div>
  );
}
