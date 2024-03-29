import React from "react";

export default function CustomInput(props) {
  return (
    <label htmlFor="custom">
      <input
        name="custom"
        max="100"
        value={props.value}
        onChange={props.onChange}
        placeholder="Custom"
        type="number"
        className="rounded p-2 placeholder:text-dark-gray-cyan text-dark-cyan font-semibold opacity-[0.8] w-full text-center appearance-none bg-light-gray"
      />
    </label>
  );
}
