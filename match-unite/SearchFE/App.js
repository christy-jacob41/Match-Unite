import GoogleMapReact from 'google-map-react';
import searchicon from './searchicon.svg';
import './App.css';

function App() {
  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
      
  return (
     <div className="main-body">
       <div className="map">
       <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBSM2Z0Ps0qYxYnjlOw00R_nuV3vsq0K2k' }}
        defaultCenter={location}
        defaultZoom={10}
      ></GoogleMapReact>
     </div>
     <div className = "search">
     <img className = "searchicon" src = {searchicon}/>
     <input className="searchbar" type="text" placeholder="Search.."/>
     <div className="filter-button">Filter</div>
     <div className="search-button">Search</div>
     </div>
     </div>
  );
}

export default App;
