const App = () => {
  const course = 'Half Stack application development'
  
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = ({title}) => <h1>{title}</h1>
  const Content = ({ parts }) => {
    return parts.map(part => <p>{part.name}: {part.exercises}</p>)
  }
  const Total = ({ parts }) => {
    const total = parts.reduce((acc, curr) => acc + curr.exercises ,0)
    return <p>Total exercise is: {total}</p>
  }
  
  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App