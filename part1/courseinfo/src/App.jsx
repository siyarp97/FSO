const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = ({title}) => <h1>{title}</h1>
  const Total = ({total}) => <p>Number of exercises {total}</p>
  const Part = ({part,exercise}) => <p>{part} {exercise}</p>
  const Content = () => {
    return(
      <>
        <Part part={part1} exercise={exercises1} />
        <Part part={part2} exercise={exercises2} />
        <Part part={part3} exercise={exercises3} />
      </>
    )
  }
  return (
    <div>
      <Header title={course} />
      <Content />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App