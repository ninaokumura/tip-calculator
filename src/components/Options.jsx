import clsx from 'clsx';
import React from 'react';
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
  return (
    <div className='grid grid-cols-3 gap-2'>
      {percentages.map((percentage, idx) => (
        <button
          onClick={() => props.onClick(percentage.value)}
          key={idx}
          className={clsx(
            'bg-dark-cyan rounded p-2 text-white w-24 hover:bg-light-gray-cyan hover:text-dark-cyan font-semibold',
            {
              'bg-strong-cyan !text-dark-cyan':
                percentage.value === props.selected,
            }
          )}
        >
          {percentage.name}
        </button>
      ))}
      <CustomInput onChange={evt => props.onClick(Number(evt.target.value))} />
    </div>
  );
}
