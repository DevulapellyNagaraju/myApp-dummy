import React, { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

const RoutingMachine = ({ route }) => {
  const map = useMap();
  const routingControlRef = useRef(null);

  useEffect(() => {
    if (route) {
      // Remove the existing routing control if it exists
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
        routingControlRef.current = null;
      }

      // Create a new control
      routingControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(route.start.lat, route.start.lng),
          L.latLng(route.end.lat, route.end.lng),
        ],
        routeWhileDragging: true,
      }).addTo(map);
    }

    // Cleanup  when the component unmounts
    return () => {
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
        routingControlRef.current = null;
      }
    };
  }, [route, map]);

  return null;
};

export default RoutingMachine;