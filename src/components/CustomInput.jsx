import React from 'react';

export default function CustomInput(props) {
  return (
    <button>
      <label htmlFor='custom'>
        <input
          max='100'
          min='0'
          onChange={props.onChange}
          placeholder='Custom'
          type='number'
          className='rounded p-2 placeholder:text-dark-cyan text-dark-cyan font-semibold opacity-[0.8] w-24 text-center appearance-none bg-light-gray'
        />
      </label>
    </button>
  );
}
