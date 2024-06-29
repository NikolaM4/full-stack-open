/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import personService from './services/persons'
const Persons = ({ personsToShow }) => {
  const deletePerson = (person) => {
    if (confirm(`Delete ${person.name}?`)) personService.deletePerson(person.id)
  }

  return (
    <>
      {personsToShow.map((person) => (
        <>
          <p style={{ display: 'inline-block' }} key={person.name}>
            {person.name} {person.number}
          </p>
          <button style={{ display: 'inline-block' }} onClick={() => deletePerson(person)}>
            {' '}
            Delete
          </button>
          <br />
        </>
      ))}
    </>
  )
}

export default Persons
