import React, { useState } from 'react';
import './CustomCheckbox.scss';


export const CustomCheckbox = ({ initialValue, onChange, disabled, options }) => {
  const [isChecked, setIsChecked] = useState(initialValue);

  const handleChange = () => {
    setIsChecked(!isChecked);

    if (onChange) {
      onChange(!isChecked); // Pass the new value to the parent component
    }
  };

  return (
    <div></div>
  );
};
