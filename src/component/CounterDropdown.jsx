import React, { useState } from 'react';
import './CounterDropdown.css'; // Import the CSS file for styling

const CounterDropdown = () => {
  const [quantity, setQuantity] = useState(0);
  const [selectedPaxType, setSelectedPaxType] = useState('adult'); // Default paxtype

  const paxTypes = ['adult', 'child', 'infant']; // Options for paxtype

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handlePaxTypeChange = (event) => {
    setSelectedPaxType(event.target.value);
    setQuantity(0); // Reset quantity when paxtype changes
  };

  return (
    <div className="counter-dropdown">
      <label htmlFor="paxType">Pax Type:</label>
      <select id="paxType" onChange={handlePaxTypeChange} value={selectedPaxType}>
        {paxTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default CounterDropdown;
