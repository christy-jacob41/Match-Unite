import React, {Fragment} from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
    Circle
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
    height: "85vh",
    marginTop: "15vh",
    width: "100%",
    position: "absolute"
};
const center = {
    lat: 32.99854242977387,
    lng: -96.92106544603939,
};


const data = [
    {
      id: 1,
      name: "Navin's House",
      latitude: "32.99854242977387",
      longitude: "-96.92106544603939"
    },
    {
      id: 2,
      name: "Bushwick",
      latitude: "32.9942861",
      longitude: "-96.9389312"
    },
    {
      id: 3,
      name: "East New York",
      latitude: "32.9977799",
      longitude: "-96.9147716"
    },
    {

    id: 6,
      name: "Navin's House",
      latitude: "32.99654242977387",
      longitude: "-96.92506544603939"
    },

    {
      id: 7,
      name: "Bushwick",
      latitude: "32.9972861",
      longitude: "-96.9349312"
    },

    {
      id: 8,
      name: "East New York",
      latitude: "32.9947799",
      longitude: "-96.9137716"
    }
  ];


export default function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyB7M3lkWp_5q0_SbhhhTmehkYALDFF1Ttk",
        libraries,
    });
// messing around with react hooks use state
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";
    
    return <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
    >
        {data.map(data => {
          return (
            <Fragment key={data.id}>
              <Marker position={{lat: parseFloat(data.latitude), lng: parseFloat(data.longitude)}} />
              <Circle center={{lat: parseFloat(data.latitude), lng: parseFloat(data.longitude)}} radius={(Math.random() * (50-1) +1)*5} options={{strokeColor: "#1574BB", strokeOpacity: 0.8, strokeWeight: "2", fillColor: "#1574BB", fillOpacity: 0.35}}/>}
            </Fragment>
          );
        })}
    </GoogleMap>
    
}