import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './App.css';
import React, { useState, useEffect } from 'react';
import surfSpots from '/Users/sitt1iu/Documents/surf-map/src/surfSpots.js';


const circleIcon = L.divIcon({
  className: 'custom-marker',
  iconSize: [16, 16]
});

function MapPage() {
  const [sstData, setSstData] = useState({});
  
  const fetchSST = async (spot) => {
    const date = '2024-05-01'; // or dynamically use today’s date
    const url = `http://localhost:3001/api/sst?lat=${spot.lat}&lng=${spot.lng}&date=${date}`;
    
    try {
      const res = await fetch(url);
      const data = await res.json();
      setSstData(prev => ({ ...prev, [spot.id]: data.temperature_celsius }));
    } catch (err) {
      console.error("Failed to fetch SST:", err);
      setSstData(prev => ({ ...prev, [spot.id]: 'N/A' }));
    }
  };

  return (
    <MapContainer center={[-8, 115]} zoom={3} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {surfSpots.map(spot => (
        <Marker key={spot.id} position={[spot.lat, spot.lng]} icon={circleIcon}>
          <Popup
            eventHandlers={{
              add: () => fetchSST(spot)  // This runs when popup is opened
            }}
  >
            <h3>{spot.name}</h3>
            <p>{spot.summary}</p>
            <p><strong>Location:</strong> {spot.location}</p>
            <p><strong>Country:</strong> {spot.country}</p>
            <p><strong>Coordinates:</strong> {spot.lat}, {spot.lng}</p>
            <p><strong>Water Temperature:</strong> {sstData[spot.id] !== undefined ? `${sstData[spot.id]} °C` : 'Loading...'}</p>
            <p><strong>Best Season:</strong> {spot.bestSeason}</p>
            <p><strong>Wave Type:</strong> {spot.waveType}</p>
            <p><strong>Skill Level:</strong> {spot.skillLevel}</p>
            <Link to={`/detail/${spot.id}`}>Detail</Link>
          </Popup>
        </Marker>

      ))}
    </MapContainer>
  );
}

function DetailPage() {
  const { spotId } = useParams();
  const spot = surfSpots.find(s => s.id === spotId);
  const [comment, setComment] = useState('');
  const [contributions, setContributions] = useState(spot.userContributions || []);

  if (!spot) return <div>Spot not found.</div>;

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newEntry = { username: 'Anonymous', comment };
      setContributions(prev => [...prev, newEntry]);
      setComment('');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{spot.name}</h1>
      <p><strong>Summary:</strong> {spot.summary}</p>
      <p><strong>Details:</strong> {spot.details}</p>
      <p><strong>Location:</strong> {spot.location}, {spot.country}</p>
      <p><strong>Coordinates:</strong> {spot.lat}, {spot.lng}</p>
      <p><strong>Water Temperature:</strong> {spot.temperature_celsius ?? 'Loading...'} °C</p>
      <p><strong>Best Season:</strong> {spot.bestSeason}</p>
      <p><strong>Wave Type:</strong> {spot.waveType}</p>
      <p><strong>Skill Level:</strong> {spot.skillLevel}</p>

      <h3>Amenities</h3>
      <ul>
        {spot.amenities?.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h3>Transportation</h3>
      <p>{spot.transportation}</p>


      <h3>Gallery</h3>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {spot.images?.map((img, i) => (
          <img key={i} src={img} alt={`Surf spot ${i}`} style={{ width: '200px', borderRadius: '8px' }} />
        ))}
      </div>

      <h3>User Contributions</h3>
      <ul>
        {contributions.map((c, i) => (
          <li key={i}><strong>{c.username}:</strong> {c.comment}</li>
        ))}
      </ul>

      <form onSubmit={handleCommentSubmit} style={{ marginTop: '1rem' }}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="3"
          placeholder="Leave a tip..."
          style={{ width: '100%', padding: '0.5rem' }}
        />
        <button type="submit" style={{ marginTop: '0.5rem' }}>Submit</button>
      </form>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/">← Back to Map</Link>
      </div>
    </div>
  );
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<MapPage />} />
      <Route path="/detail/:spotId" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
