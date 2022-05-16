import React from "react"
import Button from "./Button"

const Filter = ({ onSelect, selected }) => {
  const onClick = (val) => {
    onSelect(val)
  }
  return (
    <div>
      <Button
        className="button-filter"
        color={selected !== 1000 ? "green" : "black"}
        text="All"
        onClick={() => onClick(1000)}
      />
      <Button
        className="button-filter"
        color={selected !== 1 ? "green" : "black"}
        text="Today"
        onClick={() => onClick(1)}
      />
      <Button
        className="button-filter"
        color={selected !== 7 ? "green" : "black"}
        text="Last 7 Days"
        onClick={() => onClick(7)}
      />
      <Button
        className="button-filter"
        color={selected !== 30 ? "green" : "black"}
        text="Last 30 Days"
        onClick={() => onClick(30)}
      />
    </div>
  )
}

export default Filter
