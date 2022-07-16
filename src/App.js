import { useState } from "react";
import Options from "./components/Options";
import Input from "./components/Input";
import { formatAsCurrency } from "./lib/utils";
import { ReactComponent as DollarIcon } from "./images/icon-dollar.svg";
import { ReactComponent as PersonIcon } from "./images/icon-person.svg";

function App() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [peopleNum, setPeopleNum] = useState("");

  const cannotCalculate = !peopleNum || !bill;

  const tipAmount = cannotCalculate
    ? 0
    : (bill * (tipPercentage / 100)) / peopleNum;

  const totalPerPerson = cannotCalculate ? 0 : tipAmount + bill / peopleNum;

  function handleTipClick(value) {
    setTipPercentage(value);
  }
  function handlePeopleChange(evt) {
    const { value } = evt.target;
    setPeopleNum(value === "" ? undefined : Number(value));
  }

  function handleBillChange(evt) {
    const { value } = evt.target;
    setBill(value === "" ? undefined : Number(value));
  }

  function handleReset(evt) {
    evt.preventDefault();
    setBill("");
    setPeopleNum("");
    setTipPercentage("");
  }

  return (
    <div className="grid place-items-center min-h-screen bg-light-gray-cyan max-w-screen font-mono p-4">
      <div>
        <h1 className="text-center py-8 sm:py-12 sm:text-xl font-semibold opacity-[0.7] tracking-[0.7rem] text-dark-cyan">
          <div>SPLI</div>
          <div>TTER</div>
        </h1>
        <main className="sm:h-[20rem] sm:w-[40rem] bg-[#fff] rounded-xl p-6 sm:grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col justify-between gap-6 sm:gap-2 pb-6">
            <Input
              min="0"
              icon={<DollarIcon />}
              label="Bill"
              placeholder="0"
              onChange={handleBillChange}
              value={bill}
              isInvalid={bill === 0}
              validationMessage={"Can't be zero."}
            />
            <span className="text-xs sm:text-base font-semibold text-dark-gray-cyan">
              Select Tip %
            </span>
            <Options selected={tipPercentage} onClick={handleTipClick} />
            <Input
              min="0"
              icon={<PersonIcon />}
              label="Number of people"
              placeholder="0"
              value={peopleNum}
              onChange={handlePeopleChange}
              isInvalid={peopleNum === 0}
              validationMessage={"Can't be zero."}
            />
          </div>
          <div className="bg-dark-cyan rounded-lg text-white flex flex-col justify-between p-4 gap-6">
            <div className="grid gap-8 grid-cols-2 text-xs sm:text-base">
              <div>
                Tip Amount
                <span className="text-sm opacity-[0.5]">/ person</span>
              </div>
              <span className="sm:text-2xl text-xl text-strong-cyan font-semibold text-right">
                {formatAsCurrency(tipAmount)}
              </span>

              <div className="flex flex-col">
                Total <span className="opacity-[0.5]">/ person</span>
              </div>
              <span className="sm:text-2xl text-xl text-strong-cyan font-semibold text-right">
                {formatAsCurrency(totalPerPerson)}
              </span>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleReset}
                className="bg-strong-cyan text-dark-cyan w-full p-2 rounded font-bold hover:bg-light-gray-cyan"
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
