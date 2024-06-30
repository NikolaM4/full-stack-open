/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personService from './services/persons'
import Notification from './Notification'
import './index.css'
import ErrorNotification from './ErrorNotification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

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
        found = true
      }
    })
    if (found === true) {
      if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
        personService
          .update(persons.find((person) => person.name === newName).id, { name: newName, number })
          .then((returnedPerson) => setPersons(persons.map((person) => (person.id !== returnedPerson.id ? person : returnedPerson))))
          .catch(() => {
            setError(`Unable to find and update ${newName}`)
            setTimeout(() => {
              setError(null)
            }, 4000)
            setPersons(persons.filter((n) => n.id !== persons.id))
          })
    }
    if (found === false)
      personService.create({ name: newName, number, id: `${persons.length + 1}` }).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
        setMessage(`Added ${newName}`)
        setTimeout(() => {
          setMessage(null)
        }, 4000)
      })
  }

  const addFilter = (e) => {
    setFilter(e.target.value)
  }

  const personsToShow = filter === '' ? persons : persons.filter((person) => person.name.toLowerCase().includes(filter.toLocaleLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <ErrorNotification message={error} />
      <Notification message={message} />
      <Filter addFilter={addFilter} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} writeName={writeName} writeNumber={writeNumber} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
