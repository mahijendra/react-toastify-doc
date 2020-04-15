import React from "react";

interface RadioProps {
  options: Record<string, string>;
  name: string;
  onChange: (e: React.ChangeEvent) => void;
  checked: string | boolean;
}

export const RadioList: React.FC<RadioProps> = ({
  options,
  name,
  onChange,
  checked = false,
}) => (
  <ul>
    {Object.keys(options).map((k) => {
      const option = options[k];

      return (
        <li key={`${name}-${option}`}>
          <label htmlFor={option}>
            <input
              id={option}
              type="radio"
              name={name}
              value={option}
              checked={option === checked}
              onChange={onChange}
            />
            {option}
          </label>
        </li>
      );
    })}
  </ul>
);
