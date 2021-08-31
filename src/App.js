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
  
  
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search" />
        </div>
      </main>
    </div>
      
  );
}
