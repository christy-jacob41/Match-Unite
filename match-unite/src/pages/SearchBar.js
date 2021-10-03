import searchicon from '../searchicon.svg';
import plusbutton from '../plus-symbol-button-svgrepo-com.svg'
import './SearchBar.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Button from 'react-bootstrap/Button';

function SearchBar() {

      
  return (
     <div className="main-body">
     <footer className = "searcher">
     <Popup trigger = {<img className = "plusbutton" src={plusbutton}/>} position="right bottom"><div>
         <h3>Add Event</h3>
         <h5>Name</h5>
         <input type="text" placeholder="Ex. John Cena"/>
         <h5>Address</h5>
         <input type="text" placeholder="Ex. 1601 Silver Table Dr"/>
         <h5>Date</h5>
         <input type="text" placeholder="Ex. 10/15/21"/>
         <h5>Time</h5>
         <input type="text" placeholder="Ex. 5:00 PM"/>
         <h5>Description</h5>
         <input type="text" placeholder="Optional"/>
         <Button className="AddEventButton" block
   style={{backgroundColor: 'black', fontWeight: 'bold', color: 'white', borderRadius: '100px', textAlign: 'Center', width: '10vw', marginTop: '15px', height: '7vh', fontSize: '3vh', marginLeft:'15px'}}>Confirm</Button>
         </div></Popup>
     <img className = "searchicon" src = {searchicon}/>
     <input className="searchbar" type="text" placeholder="Location"></input>
     <div className="filter-button">Filter</div>
     <div className="search-button">Search</div>
     </footer>
     </div>
  );
}

export default SearchBar;