import React from "react";
export type SelectOption = {
  label: string | number;
  value: string | number;
};
type DropdownProps = {
  title: string;
  items: SelectOption[];
  handleSelect: (e: React.FormEvent<HTMLSelectElement>) => void;
  styles?: any;
};

function SelectDropdown({ title, items, handleSelect, styles }: DropdownProps) {
  return (
    <span className="select-container">
      <label htmlFor="select">{title}</label> {}
      <select
        onChange={handleSelect}
        id="select"
        style={
          styles
            ? styles
            : {
                width: "7rem",
                padding: "5px 10px",
                borderRadius: "5px",
              }
        }>
        {items.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </span>
  );
}

export default SelectDropdown;
