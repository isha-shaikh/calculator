import React, { useState } from "react";

function Counter() {
  // Declare a state variable `count` with an initial value of 0
  const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  // Function to handle increment
  const increment10 = () => {
    setCount1(count1 + 10);
  };

  // Function to handle decrement
  const increment20 = () => {
    setCount1(count1 + 20);
  };
  // Function to handle increment
  const increment30 = () => {
    setCount1(count1 + 30);
  };
  const increment40 = () => {
    setCount1(count1 + 40);
  };

  // Function to handle decrement
  const decrement10 = () => {
    setCount1(count1 - 10);
  }; // Function to handle increment
  const decrement20 = () => {
    setCount1(count1 - 20);
  };

  // Function to handle decrement
  const decrement30 = () => {
    setCount1(count1 - 30);
  };
  // Function to handle increment
  const decrement40 = () => {
    setCount1(count1 - 40);
  };

  return (
    <div>
      <h1>Result : {count1}</h1>
      {/* <button>Increment </button> */}
      <div>
        <button type="button" className="btn btn-success" onClick={increment10}>
          +10
        </button>

        <button type="button" className="btn btn-warning" onClick={increment20}>
          +20
        </button>
        <button type="button" className="btn btn-success" onClick={increment30}>
          +30
        </button>
        <button type="button" className="btn btn-warning" onClick={increment40}>
          +40
        </button>
      </div>

      {/* <button>Decrement </button> */}
      <div>
        <button type="button" className="btn btn-success" onClick={decrement10}>
          -10
        </button>

        <button type="button" className="btn btn-warning" onClick={decrement20}>
          -20
        </button>
        <button type="button" className="btn btn-success" onClick={decrement30}>
          -30
        </button>
        <button type="button" className="btn btn-warning" onClick={decrement40}>
          -40
        </button>
      </div>

      {/* <button onClick={decrement}>Decrement-50</button>
       <button onClick={increment100}>Decrement 100</button>
      <button onClick={decrement100}>Decrement-100</button> */}
    </div>
  );
}
export default Counter;
