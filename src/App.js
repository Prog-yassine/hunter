import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './App.css';



function App() {



  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#474747",
        
      }}
    >

      <MapContainer
        center={[0, 0]} // Coordonnées initiales (latitude, longitude)
        zoom={2} // Niveau de zoom initial
        minZoom={4}
        maxZoom={18}
        zoomControl={false}
        style={{
          height: "100%",
          width: "90%",
        }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          attribution=""
        />
      </MapContainer>
    </div>
  );
}

export default App;
