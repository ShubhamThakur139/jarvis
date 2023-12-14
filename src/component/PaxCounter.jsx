import React, { useState } from 'react';
import './PaxCounter.css';

const PaxCounter = () => {
  const [selectedPax, setSelectedPax] = useState('adult');
  const [paxCounts, setPaxCounts] = useState({
    adult: 0,
    child: 0,
    infant: 0,
  });

  const handlePaxChange = (event) => {
    setSelectedPax(event.target.value);
  };

  const handleIncrement = () => {
    setPaxCounts((prevCounts) => ({
      ...prevCounts,
      [selectedPax]: prevCounts[selectedPax] + 1,
    }));
  };

  const handleDecrement = () => {
    if (paxCounts[selectedPax] > 0) {
      setPaxCounts((prevCounts) => ({
        ...prevCounts,
        [selectedPax]: prevCounts[selectedPax] - 1,
      }));
    }
  };

  return (
    <div>
      <h2>Pax Counter</h2>
      <label htmlFor="paxDropdown">Select Pax Type:</label>
      <select id="paxDropdown" value={selectedPax} onChange={handlePaxChange}>
        <option value="adult">Adult</option>
        <option value="child">Child</option>
        <option value="infant">Infant</option>
      </select>

      <div>
        <p>
          {selectedPax.charAt(0).toUpperCase() + selectedPax.slice(1)}:{' '}
          {paxCounts[selectedPax]}
        </p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default PaxCounter;
