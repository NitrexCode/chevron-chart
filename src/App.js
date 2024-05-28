// src/App.js
import React, { useState } from 'react';
import CheckboxForm from './components/CheckboxForm';
import ChevronChart from './components/ChevronChart';
import './App.css';

const App = () => {
  const [checkboxes, setCheckboxes] = useState([{"checked":false}]);

  return (
    <div className="App">
      <CheckboxForm checkboxes={checkboxes} setCheckboxes={setCheckboxes} />
      <ChevronChart checkboxes={checkboxes} />
    </div>
  );
};

export default App;
