import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import RoutingMachine from './RoutingMachine';
import styles from './styles';

const App = () => {
  const [route, setRoute] = useState(null);
  const mapRef = useRef();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const { address1, address2 } = data;

    // Dummy data for demonstration purposes
    const dummyCoordinates = {
      'delhi': { lat: 28.7041, lng: 77.1025 }, // Delhi, India
      'mumbai': { lat: 19.076, lng: 72.8777 }, // Mumbai, India
      'new york': { lat: 40.7128, lng: -74.006 }, // New York, USA
      'los angeles': { lat: 34.0522, lng: -118.2437 }, // Los Angeles, USA
    };

    const start = dummyCoordinates[address1.toLowerCase()] || null;
    const end = dummyCoordinates[address2.toLowerCase()] || null;

    if (start && end) {
      setRoute({ start, end });
    } else {
      alert('Invalid addresses. Please use valid city names like "Delhi", "Mumbai", "New York", or "Los Angeles".');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <img
          src='https://freepngimg.com/download/united_states/76079-google-computer-icons-states-maps-united-location.png'
          style={styles.titleIcon}
          alt="Map Icon"
        />
        MyRouteFinder:
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Starting Point</label>
          <input
            {...register('address1', { required: true })}
            placeholder="Enter city (e.g., Delhi, New York)"
            style={styles.input}
          />
          {errors.address1 && <span style={styles.errorText}>This field is required</span>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Destination</label>
          <input
            {...register('address2', { required: true })}
            placeholder="Enter city (e.g., Mumbai, Los Angeles)"
            style={styles.input}
          />
          {errors.address2 && <span style={styles.errorText}>This field is required</span>}
        </div>

        <button type="submit" style={styles.button}>Locate Route</button>
      </form>

      <MapContainer
        center={[20.5937, 78.9629]} // Centered in India
        zoom={5}
        style={styles.map}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {route && (
          <>
            <Marker position={[route.start.lat, route.start.lng]}>
              <Popup>Starting Point</Popup>
            </Marker>
            <Marker position={[route.end.lat, route.end.lng]}>
              <Popup>Destination</Popup>
            </Marker>
          </>
        )}
        <RoutingMachine route={route} />
      </MapContainer>
    </div>
  );
};

export default App;