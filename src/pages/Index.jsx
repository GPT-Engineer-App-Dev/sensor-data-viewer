import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Box, Text } from '@chakra-ui/react';

// Dummy data for buildings in Oslo
const buildings = [
  { id: 1, position: [59.911491, 10.757933], sensorData: 'Temperature: 20°C, Humidity: 30%' },
  { id: 2, position: [59.913868, 10.752245], sensorData: 'Temperature: 19°C, Humidity: 35%' },
  { id: 3, position: [59.914414, 10.767766], sensorData: 'Temperature: 21°C, Humidity: 28%' },
  { id: 4, position: [59.910674, 10.774306], sensorData: 'Temperature: 22°C, Humidity: 25%' },
  { id: 5, position: [59.909973, 10.753979], sensorData: 'Temperature: 18°C, Humidity: 40%' },
  { id: 6, position: [59.912391, 10.746524], sensorData: 'Temperature: 17°C, Humidity: 45%' },
  { id: 7, position: [59.916911, 10.775849], sensorData: 'Temperature: 23°C, Humidity: 22%' },
  { id: 8, position: [59.929843, 10.752204], sensorData: 'Temperature: 16°C, Humidity: 50%' },
  { id: 9, position: [59.927394, 10.721878], sensorData: 'Temperature: 15°C, Humidity: 55%' },
  { id: 10, position: [59.911785, 10.733159], sensorData: 'Temperature: 24°C, Humidity: 20%' }
];

// Custom icon for building markers
const buildingIcon = new L.Icon({
  iconUrl: require('../assets/building-pin.png'),
  iconRetinaUrl: require('../assets/building-pin.png'),
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Index = () => {
  const [activeBuilding, setActiveBuilding] = useState(null);

  return (
    <MapContainer center={[59.9139, 10.7522]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {buildings.map(building => (
        <Marker
          key={building.id}
          position={building.position}
          icon={buildingIcon}
          eventHandlers={{
            click: () => {
              setActiveBuilding(building);
            },
          }}
        />
      ))}
      {activeBuilding && (
        <Popup
          position={activeBuilding.position}
          onClose={() => {
            setActiveBuilding(null);
          }}
        >
          <Box>
            <Text fontWeight="bold">Building Information</Text>
            <Text>{activeBuilding.sensorData}</Text>
          </Box>
        </Popup>
      )}
    </MapContainer>
  );
};

export default Index;