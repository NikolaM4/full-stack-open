import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const average = () => {
    let sum = 0;
    sum = good - bad;
    return sum == 0 ? 0 : sum / (good + neutral + bad);
  };

  const positive = () => {
    let sum = good + bad + neutral;
    return good == 0 ? 0 : (good / sum) * 100;
  };
  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>average {average()}</p>
      <p>positive {positive()}%</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </>
  );
};

export default App;
