const Header = ({name}) => <h1>{name}</h1>
const Content = ({parts}) =>
    <ul>
        {parts.map(part => <Part key={part.id} part={part}/>)}
        <li style={{fontWeight:'bold'}}>Total of {parts.reduce((acc, curr) => acc + curr.exercises,0)} exercises</li>
    </ul>
const Part = ({part}) => <li>{part.name} {part.exercises}</li>

export const Course = ({course}) => {
    return (
        <>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
        </>
    )
}