import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [healthData, setHealthData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch health check from Django backend
    fetch("http://localhost:8000/api/health/")
      .then((response) => response.json())
      .then((data) => {
        setHealthData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <h1>Expense Tracker - Full Stack Test</h1>
      <div
        style={{
          background: "#f0f0f0",
          padding: "20px",
          borderRadius: "8px",
          margin: "20px",
        }}
      >
        <h2>Backend Health Check:</h2>
        <pre>{JSON.stringify(healthData, null, 2)}</pre>
      </div>
      <p>✅ Frontend (React) ↔️ Backend (Django) communication working!</p>
    </div>
  );
}

export default App;
