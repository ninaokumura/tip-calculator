import React from 'react';

export default function Input(props) {
  return (
    <label htmlFor={props.id} name={props.name}>
      <span className='font-semibold text-dark-cyan text-xs sm:text-base'>
        {props.label}
      </span>
      <div className='relative'>
        <input
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          type='number'
          className='bg-light-gray w-full h-8 rounded text-right p-2 text-dark-cyan font-semibold'
        />
        {props.icon && (
          <div className='absolute left-2 top-2 scale-75'>{props.icon}</div>
        )}
      </div>
    </label>
  );
}
