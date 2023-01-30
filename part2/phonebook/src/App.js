import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addContact = (event) => {
    event.preventDefault()

    if(!newNumber || !newName) {
      alert('Both name and number have to be filled')
      return
    }

    if(persons.find(row => row.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    console.log(newName)
    setPersons(persons.concat({name: newName, number: newNumber}))
    setNewName("")
    setNewNumber("")
  }

  const onInputChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const onNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const onSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} onSearchChange={onSearchChange} />
      <h2>Add a new</h2>
      <PersonForm addContact={addContact} newName={newName} onInputChange={onInputChange} newNumber={newNumber} onNumberChange={onNumberChange} />
      <h2>Numbers</h2>
      <Persons search={search} persons={persons} />
    </div>
  )
}


const Filter = ({search, onSearchChange}) => {
  return (
    <div>
      Filter shown with <input value={search} onChange={onSearchChange} />
    </div>
  )
}


const PersonForm = ({addContact, newName, onInputChange, newNumber, onNumberChange}) => {
  return (
    <form onSubmit={addContact}>
      <div>
        name: <input value={newName} onChange={onInputChange}/>
      </div>
      <div>
        Number: <input value={newNumber} onChange={onNumberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}


const Persons = ({search, persons}) => {
  if(search) {
    return(persons.filter(person => person.name.toLowerCase().includes(search.trim().toLowerCase())).map(person => <p key={person.name}>{person.name} {person.number}</p>))
  } else {
    return(persons.map(person => <p key={person.name}>{person.name} {person.number}</p>))
  }
}


export default App