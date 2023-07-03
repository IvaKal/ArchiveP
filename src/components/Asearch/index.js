import { useState } from "react";
import "./index.css";

function RadioOptions(props) {
  const [selectedValue, setSelectedValue] = useState(props.options[0]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="radio">
      {props.options.map(function (value) {
        return (
          <label>
            <input
              type="radio"
              value={value}
              checked={selectedValue === value}
              onChange={handleChange}
            />
            {value}
          </label>
        );
      })}
    </div>
  );
}

export default RadioOptions;
