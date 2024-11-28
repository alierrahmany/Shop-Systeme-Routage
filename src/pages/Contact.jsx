import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Contact = () => {
  const [city, setCity] = useState(''); 
  const [cities, setCities] = useState([]);

  const handleAddCity = () => {
    if (city.trim()) { 
      setCities([...cities, city]); 
      setCity(''); 
    }
  };

  const handleDeleteCity = (index) => {
    const newCities = cities.filter((e, i) => i !== index); 
    setCities(newCities);
  };

  
  // Count the total number of city
  const totalCities = cities.length;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">City List</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new city"
          value={city}
          onChange={(e) => setCity(e.target.value)} 
        />
        <button className="btn btn-primary" onClick={handleAddCity}>Add</button>
      </div>
      <ul className="list-group mb-3">
        {cities.map((city, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {city}
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteCity(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="alert alert-info">
        Total Cities: {totalCities} <br />
        
      </div>
    </div>
  );
};

export default Contact;
