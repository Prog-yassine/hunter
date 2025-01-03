import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './App.css';

function DrawingTool({ onAddPoint, drawingMode }) {
  // Gérer les clics sur la carte pour ajouter des points
  useMapEvents({
    click(e) {
      if (drawingMode) {
        const { lat, lng } = e.latlng;
        onAddPoint([lat, lng]);
      }
    },
  });
  return null;
}

function App() {
  const [drawingMode, setDrawingMode] = useState(false);
  const [points, setPoints] = useState([]);

  const toggleDrawingMode = () => {
    setDrawingMode((prev) => !prev);
    if (drawingMode) {
      setPoints([]); // Réinitialiser les points si le mode est désactivé
    }
  };

  const addPoint = (point) => {
    setPoints((prevPoints) => [...prevPoints, point]);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#474747",
        
      }}
    >
      <button
        onClick={toggleDrawingMode}
        style={{
          position: "absolute",
          zIndex: 1000,
          top: 10,
          left: 10,
          padding: "10px 20px",
          backgroundColor: drawingMode ? "red" : "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {drawingMode ? "Quit drawing Mode" : "Activer drawing Mode"}
      </button>

      <MapContainer
        center={[0, 0]} // Coordonnées initiales (latitude, longitude)
        zoom={2} // Niveau de zoom initial
        minZoom={4}
        maxZoom={18}
        zoomControl={false}
        style={{
          height: "100%",
          width: "90%",
          cursor: drawingMode ? "pointer" : "default", // Changement de curseur sur la carte
        }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          attribution=""
        />
        <DrawingTool onAddPoint={addPoint} drawingMode={drawingMode} />
        {points.length > 1 && <Polygon positions={points} color="blue" />}
      </MapContainer>
    </div>
  );
}

export default App;
