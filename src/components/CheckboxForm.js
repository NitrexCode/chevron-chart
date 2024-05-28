import React from 'react';

const CheckboxForm = ({ checkboxes, setCheckboxes }) => {

  const handleCheckboxChange = (index) => {
    setCheckboxes(prevCheckboxes => {
      const checkedCount = prevCheckboxes.filter(checkbox => checkbox.checked).length;
  
      if (checkedCount === 1 && prevCheckboxes[index].checked) {
        return prevCheckboxes;
      }
  
      const newCheckboxes = prevCheckboxes.map((checkbox, i) => 
        i === index ? { checked: !checkbox.checked } : checkbox
      );
  
      if (index === prevCheckboxes.length - 1) {
        newCheckboxes.push({ checked: false });
      }
  
      return newCheckboxes;
    });
  };
  
 
  return (
    <form>
      {checkboxes.map((checkbox, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={checkbox.checked}
            onChange={() => handleCheckboxChange(index)}
          />
          Checkbox {index + 1}
        </label>
      ))}
    </form>
  );
};

export default CheckboxForm;
