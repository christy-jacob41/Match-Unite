import React from 'react';
import Map from './Map'
import Navbar from './Navbar'
import SearchBar from './SearchBar'


const Search = (props) => {
return (
    <div>
        <Navbar></Navbar>
        <Map z-index="0"></Map>
        <SearchBar></SearchBar>
    </div>
  )
};

export default Search;