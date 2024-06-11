import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Text } from '@chakra-ui/react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Dummy data for buildings in Oslo
const buildings = [
  { id: 1, lat: 59.9139, lng: 10.7522, sensorData: 'Temperature: 20°C, Humidity: 30%' },
  { id: 2, lat: 59.9149, lng: 10.7522, sensorData: 'Temperature: 21°C, Humidity: 35%' },
  // ...add 8 more buildings with random coordinates in Oslo and dummy sensor data
];

// Custom pin icon
const pinIcon = new L.Icon({
  iconUrl: require('../assets/pin-icon.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Index = () => {
  return (
    <MapContainer center={[59.9139, 10.7522]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {buildings.map(building => (
        <Marker key={building.id} position={[building.lat, building.lng]} icon={pinIcon}>
          <Popup>
            <Box>
              <Text fontWeight="bold">Building ID: {building.id}</Text>
              <Text>{building.sensorData}</Text>
            </Box>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Index;