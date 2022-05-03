import { useState } from 'react';
import './App.css';
import Options from './components/Options';
import Input from './components/Input';
import { formatAsCurrency } from './lib/utils';
import { ReactComponent as DollarIcon } from './images/icon-dollar.svg';
import { ReactComponent as PersonIcon } from './images/icon-person.svg';

function App() {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [peopleNum, setPeopleNum] = useState(0);

  const tipAmount =
    peopleNum === 0 ? 0 : (bill * (tipPercentage / 100)) / peopleNum;

  const totalPerPerson = peopleNum === 0 ? 0 : tipAmount + bill / peopleNum;

  function handleTipClick(value) {
    setTipPercentage(value);
  }
  function handlePeopleChange(evt) {
    setPeopleNum(Number(evt.target.value));
  }

  function handleBillChange(evt) {
    setBill(Number(evt.target.value));
  }

  function handleReset(evt) {
    evt.preventDefault();
    setBill(0);
    setPeopleNum(0);
    setTipPercentage('');
  }

  return (
    <div className='grid place-items-center min-h-screen bg-light-gray-cyan max-w-screen font-mono'>
      <div>
        <h1 className='text-center py-12 text-xl font-semibold opacity-[0.7] tracking-[0.7rem] text-dark-cyan'>
          <div>SPLI</div>
          <div>TTER</div>
        </h1>
        <main className='h-[20rem] w-[40rem] bg-[#fff] rounded-xl p-6 grid grid-cols-2 gap-4'>
          <div className='flex flex-col justify-between'>
            <Input
              icon={<DollarIcon />}
              label='Bill'
              placeholder='0'
              onChange={handleBillChange}
              value={bill}
            />
            <span>Select Tip %</span>
            <Options selected={tipPercentage} onClick={handleTipClick} />
            <Input
              icon={<PersonIcon />}
              label='Number of people'
              placeholder='0'
              value={peopleNum}
              onChange={handlePeopleChange}
            />
          </div>
          <div className='bg-dark-cyan rounded-lg text-white flex flex-col justify-between p-4'>
            <div className='grid gap-8 grid-cols-2'>
              <div>
                Tip Amount
                <span className='text-sm opacity-[0.5]'>/ person</span>
              </div>
              <span className='text-3xl text-strong-cyan font-semibold text-right'>
                {formatAsCurrency(tipAmount)}
              </span>

              <div className='flex flex-col'>
                Total <span className='opacity-[0.5]'>/ person</span>
              </div>
              <span className='text-3xl text-strong-cyan font-semibold text-right'>
                {formatAsCurrency(totalPerPerson)}
              </span>
            </div>

            <div className='flex justify-center'>
              <button
                onClick={handleReset}
                className='bg-strong-cyan text-dark-cyan w-full p-2 rounded font-bold hover:bg-light-gray-cyan'
              >
                RESET
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
