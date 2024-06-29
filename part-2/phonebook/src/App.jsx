/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data)
    })
  }

  useEffect(hook, [])

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
    if (found === false)
      axios.post('http://localhost:3001/persons', { name: newName, number, id: persons.length + 1 }).then((response) => setPersons(persons.concat(response.data)))
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
