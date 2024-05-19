/* eslint-disable react/prop-types */
const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part key={part.id} part={part.name} exercise={part.exercises} />
      ))}
    </>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  const numOfExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return <b>total of {numOfExercises} exercises</b>
}

const Courses = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.name}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </>
  )
}

export default Courses
