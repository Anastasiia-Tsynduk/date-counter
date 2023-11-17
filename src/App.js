import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleReset() {
    setStep(1);
    setCount(0);
  }
  function plusCount() {
    setCount((curCount) => curCount + step);
  }

  function minusCount() {
    setCount((curCount) => curCount - step);
  }

  function findDateToDisplay() {
    var date = new Date();
    date.setDate(date.getDate() + count);
    return date;
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(event) => setStep(Number(event.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={minusCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(event) => setCount(Number(event.target.value))}
        />
        <button onClick={plusCount}>+</button>
      </div>
      <div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{findDateToDisplay().toDateString()}</span>
        </p>
      </div>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
