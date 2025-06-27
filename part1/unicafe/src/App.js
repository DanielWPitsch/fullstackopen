import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const allClicks = good + neutral + bad;
  //const average = (good * 1 + neutral * 0 + bad * -1) / allClicks || 0;
  if(allClicks === 0){
    return <p> No feedback given </p>
  }

  const average = (good - bad) / allClicks;
  const positivePercentage = (good / allClicks) * 100 || 0;

  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="Good: " value={good} />
      <StatisticLine text="Neutral: " value={neutral} />
      <StatisticLine text="Bad: " value={bad} />
      <StatisticLine text="All: " value={allClicks} />
      <StatisticLine text="Average: " value={average.toFixed(2)} />
      <StatisticLine text="Positive: " value={`${positivePercentage.toFixed(2)}%`} />
    </div>
  );
};


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App