import React from 'react';
import './ChevronChart.css';

const ChevronChart = ({ checkboxes }) => {
 
  return (
    <div className="chevron-chart">
      {checkboxes.map((checkbox, index) => (
        checkbox.checked ? <div key={index} className={`chevron chevron-${index + 1}`} /> : null
      ))}
    </div>
  );
};

export default ChevronChart;
