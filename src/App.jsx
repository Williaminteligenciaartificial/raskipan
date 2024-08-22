
import { useEffect, useRef, useState } from 'react';
import './App.css'; 
import useFetch from './assets/useFetch';
import getRandomNum from './assets/services/getRandomNum';
import LocationInfo from './components/LocationInfo';
import ResidentCard from './components/ResidentCard';
import Snowfall from './components/hooks/Snowfall';
function App() {

  const [locationId, setLocationId]  = useState(getRandomNum(126));

const url = `https://rickandmortyapi.com/api/location/${locationId}`;
  const [location, getLocation, hasError] = useFetch(url);

useEffect(() => {
    getLocation();

  }, [locationId]);

 const inputId = useRef();

 const handleSumit = (e) => {
  e.preventDefault();
  setLocationId(inputId.current.value.trim());

 }
 //  console.log(location);
return ( 
    <div>
        <div className="App">
      <Snowfall />
      {/* Tu contenido aquí */}
      <h1 className="text-center mt-10">¡Feliz Invierno!</h1>
    </div>
      
        <h1>rick and mortyy32</h1>
        <form onSubmit={handleSumit}>
          <input ref={inputId} type="text"  />
          <button>Search</button>
        </form>
        {hasError?(
         <h2>hey! you must provide and id 1 to 126</h2>
           ) :(
              <>
              <LocationInfo location={location}/>
        <div className='card__container'>
          {location?.residents.map((url) => (
              <ResidentCard key={url} url={url}/>
              ))}  
        </div>
        </> 
      )}
    </div>
  );
}
export default App;
 