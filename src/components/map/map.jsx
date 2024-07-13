import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from './map.module.scss';

// Fix for missing marker icon issue with leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
// import Notification from '../Notification/Notification';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const UserLocationMap = () => {
  const [position, setPosition] = useState(null);
  const [ans, setAns] = useState(null)

  useEffect(() => {
    // // window.print("Abeh location de")
    // alert("Abeh locaiton de")
    // navigator.permissions.query({ name: "accelerometer" }).then((result) => {
    //   if (result.state === "denied") {
    //     setAns(result.state)
    //     return;
    //   }
    //   // Use the sensor.
    // });
    console.log();
    // navigator.permissions.query({name: "geolocation"}).then((res)=>{setAns(res.state);})
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition([position.coords.latitude, position.coords.longitude]);
        console.log(position);
      },
      (error) => {
        console.error(error);
        setAns("there is an error")
      },
      {
        enableHighAccuracy: true
      }
    );
  }, []);

  return (
    <div className={styles.mapContainer}>
      <h2 className={styles.heading}>Your Current Location</h2>
      {position ? (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={styles.map}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <>
        <p>Loading your location...</p>
        <p>{ans}</p>
        </>
      )}
    </div>
  );
};

export default UserLocationMap;
