/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Persons = ({ personsToShow }) => {
  return (
    <>
      {personsToShow.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  )
}

export default Persons
