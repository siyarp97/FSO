const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

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
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App