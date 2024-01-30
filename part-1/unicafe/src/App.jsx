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
  if (good > 0 || neutral > 0 || bad > 0)
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <tr>
            <td>average {average()}</td>
          </tr>
          <tr>
            <td>positive {positive()}%</td>
          </tr>
        </tbody>
      </table>
    );
  else return <p>No feedback given</p>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ funct, value, children }) => {
  return <button onClick={() => funct(value + 1)}>{children}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <Button funct={setGood} value={good}>
        good
      </Button>
      <Button funct={setNeutral} value={neutral}>
        neutral
      </Button>
      <Button funct={setBad} value={bad}>
        bad
      </Button>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </>
  );
};

export default App;
