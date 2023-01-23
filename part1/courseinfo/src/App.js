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

  const sumProp = (array, property) => array.reduce((a, b) => a + b[property], 0)

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total total={sumProp(course.parts, 'exercises')}/>
    </div>
  )
}

const Header = (props) => (
  <>
    <h1>{props.course}</h1>
  </>
)

const Content = (props) => {

  return (
    <>
      {props.parts.map(element => (
        <Part key={element.name} part={element} />
      ))}
    </> 
  )
}


const Part = (props) => {
  console.log(props)
  return (
  <>
    <p> {props.part.name} {props.part.exercises} </p>
  </>
  )
}


const Total = (props) => {

  console.log(props)

  return (
    <>
      <p>
        Number of exercises {props.total}
      </p>
   </>
  )
}

export default App;