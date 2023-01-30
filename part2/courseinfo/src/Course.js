const Course = ({course}) => {

  const total = () => course.parts.reduce((currentSum, iterator) => currentSum + iterator.exercises, 0)

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <p><b>Total of {total()} exercises</b></p>
    </div>
  )
}


const Header = ({name}) => {

  return (
    <>
      <h2>{name}</h2>
    </>
  )
}


const Content = ({parts}) => {

  return (
    <>{parts.map(part => <Part key={part.id} text={part.name} exercises={part.exercises}/>)}</>
  )
}


const Part = ({text, exercises}) => {

  return (
    <p>{text} {exercises}</p>
  )
}

export default Course