import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const buttonClick = (stateChanger, newValue) => () => stateChanger(newValue) 

  return (
    <div>
      <h2>Give Feedback!</h2>

      <Button onClick={buttonClick(setBad, bad + 1)} text={"Bad"}/>
      <Button onClick={buttonClick(setNeutral, neutral + 1)} text={"Neutral"}/>
      <Button onClick={buttonClick(setGood, good + 1)} text={"Good"}/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}


const Button = ({onClick, text}) => {
  console.log(onClick, text)
  return(
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}


const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad;

  if (total === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No Feedback Given</p>
      </>
    )
  
  } else {
    return (
      <>
        <h2>Statistics</h2>

        <table>
          <StatisticsLine text={"Good"} value={good}/>
          <StatisticsLine text={"Neutral"} value={neutral}/>
          <StatisticsLine text={"Bad"} value={bad}/>
          <StatisticsLine text={"All"} value={total}/>
          <StatisticsLine text={"Average"} value={good * 1 + neutral * 0 + bad * -1}/>
          <StatisticsLine text={"Positive Percentage"} value={(good/total) * 100}/>
        </table>
      </>
    )
  }

}


const StatisticsLine = ({text, value}) => {
  
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


export default App