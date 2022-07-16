import React from "react";
import clsx from "clsx";

export default function Input({ isInvalid, validationMessage, ...props }) {
  return (
    <label htmlFor={props.id} name={props.name}>
      <span className="font-semibold text-dark-gray-cyan text-xs sm:text-base">
        {props.label}
      </span>
      <div className="relative">
        <input
          {...props}
          value={props.value ?? ""}
          type="number"
          className={clsx(
            "bg-light-gray w-full h-8 rounded text-right p-2 text-dark-cyan font-semibold ring-0 focus:outline-none",
            { "ring-2 focus:ring-2 ring-orange-800/50": isInvalid }
          )}
        />
        {validationMessage && isInvalid && (
          <div className="text-xs text-orange-600 absolute right-0 -top-5">
            {validationMessage}
          </div>
        )}
        {props.icon && (
          <div className="absolute left-2 top-2 scale-75">{props.icon}</div>
        )}
      </div>
    </label>
  );
}
