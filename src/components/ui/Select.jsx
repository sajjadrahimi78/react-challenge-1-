import { useState } from "react";

function Select({ options, value, onChange }) {
  const [sort, setSort] = useState("created_desc");

  return (
    <select name="" id="" value={value} onChange={onChange}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default Select;
