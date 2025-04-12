import React, { useState } from "react";
import "@/styles/toggle.css";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
      <div className="toggle">
        <input
          type="checkbox"
          id="btn"
          checked={isChecked}
          onChange={handleToggle}
        />
        <label htmlFor="btn">
          <span className="track">
            <span className="txt">{isChecked ? "ON" : "OFF"}</span>
          </span>
          <span className="thumb">|||</span>
        </label>
      </div>
  );
};

export default ToggleSwitch;
