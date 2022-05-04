import clsx from 'clsx';
import React, { useState } from 'react';
import CustomInput from './CustomInput';

// const percentages = ['5%', '10%', '15%', '25%', '50%'];
const percentages = [
  {
    name: '5%',
    value: 5,
  },
  {
    name: '10%',
    value: 10,
  },
  {
    name: '15%',
    value: 15,
  },
  {
    name: '25%',
    value: 25,
  },
  {
    name: '50%',
    value: 50,
  },
];

export default function Options(props) {
  const [isCustom, setIsCustom] = useState(false);
  return (
    <div className='grid sm:grid-cols-3 grid-cols-2 gap-2'>
      {percentages.map((percentage, idx) => (
        <button
          onClick={() => {
            setIsCustom(false);
            props.onClick(percentage.value);
          }}
          key={idx}
          className={clsx(
            'bg-dark-cyan rounded p-2 text-white w-24 hover:bg-light-gray-cyan hover:text-dark-cyan font-semibold',
            {
              'bg-strong-cyan !text-dark-cyan':
                !isCustom && percentage.value === props.selected,
            }
          )}
        >
          {percentage.name}
        </button>
      ))}

      <CustomInput
        value={isCustom ? props.selected : ''}
        onChange={evt => {
          setIsCustom(true);
          props.onClick(Number(evt.target.value));
        }}
      />
    </div>
  );
}
