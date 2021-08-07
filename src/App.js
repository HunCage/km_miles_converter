import { useState } from 'react';
import './App.css';

function App() {

    const [km, setKm] = useState(0);

    const handleChange = (event) => {
      setKm(event.target.value);
    }

    const convert = (km) => {
      return (km / 1.609).toFixed(4);
    }

  return (
    <div className="App">
      <header className="App-header">
        <p className="header">Convert Km to Miles</p>
      </header>
      <main className="content">
          <input 
            type="text" 
            value={km} 
            onChange={handleChange} 
          />
          <p className="result"><span className="km">{km} km</span> is <span className="miles">{convert(km)} miles</span></p>
      </main>
    </div>
  );
}

export default App;
