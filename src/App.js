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
  // const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position){
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => console.log(res.json()))
      
    }
    fetchData();
    console.log("Latitude is:", lat);
    console.log("longitude is:", long);
  }, [lat, long]);

  return (
    <div className="App">
      
    </div>
  );
}
