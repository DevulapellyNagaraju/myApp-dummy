import React from 'react';
import { createRoot } from 'react-dom/client'; // Import react-dom/client
import App from './App';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for  issue
delete L.Icon.Default.prototype._getIconUrl; // Remove default icon 
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Use createRoot instead of ReactDOM.render
const container = document.getElementById('root');
const root = createRoot(container); // Create  root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);