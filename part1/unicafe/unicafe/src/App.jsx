import { useState } from "react";

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Stats = (props) => (
  <td>
    {props.text} {props.value}
  </td>
);

const Statistics = ({ good, neutral, bad }) => {
  const statsData = [
    <Stats text="good" value={good} />,
    <Stats text="neutral" value={neutral} />,
    <Stats text="bad" value={bad} />,
    <Stats text="all" value={good + neutral + bad} />,
    <Stats text="average" value={(good - bad) / (good + neutral + bad)} />,
    <Stats
      text="positive"
      value={(good / (good + neutral + bad)) * 100 + " %"}
    />,
  ];

  const displayData = statsData.map(stat => <tr>{stat}</tr>)

  if (good + bad + neutral == 0) {
    return <p>No feedback given</p>;
  }

  return <table>{displayData}</table>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
