const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ name, exercises }) => {
  return <p>{name} {exercises}</p>
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = ({ parts }) => {
  //already did it
  const total = parts.reduce((sum, part) => sum +part.exercises, 0)
  return <p><strong> Total of {total} exercises </strong></p>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;