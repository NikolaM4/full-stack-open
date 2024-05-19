/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')

  const writeName = (e) => {
    setNewName(e.target.value)
  }

  const writeNumber = (e) => {
    setNumber(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    let found = false
    persons.map((person) => {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`)
        found = true
      }
    })
    if (found === false) setPersons([...persons, { name: newName, number, id: persons.length + 1 }])
  }

  const addFilter = (e) => {
    setFilter(e.target.value)
  }

  const personsToShow = filter === '' ? persons : persons.filter((person) => person.name.toLowerCase().includes(filter.toLocaleLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter addFilter={addFilter} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} writeName={writeName} writeNumber={writeNumber} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
