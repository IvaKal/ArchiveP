import "./index.css";
import { useEffect, useRef, useState } from "react";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const valueRef = useRef();
  useEffect(function () {
    function onClick(event) {
      if (event.target !== valueRef.current && !valueRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.body.addEventListener("click", onClick);
  }, []);
  let buttonClass = "DropdownButton";
  if (isOpen) {
    buttonClass = "DropdownButton open";
  }
  return (
    <div className="Dropdown">
      <div 
        className={buttonClass}
        onClick={function () {
          setIsOpen(!isOpen);
        }}
        ref={valueRef}
      >
        {props.value || props.placeholder}
        <img src="/img/chevron.svg"/>
      </div>
      {isOpen && (
        <div className="DropdownOptions">
          {props.value && (
            <div
              onClick={function () {
                props.onChange("");
              }}
            >
              {props.placeholder}
            </div>
          )}
          {props.options.map(function (option) {
            if (option === props.value) {
              return <></>;
            }
            return (
              <div
                onClick={function () {
                  props.onChange(option);
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
