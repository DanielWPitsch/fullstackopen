import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '99988-7766'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('');

  const addName = (e) => {
    e.preventDefault();
    const nameExists = persons.some(person => person.name === newName);
    if(nameExists){
      //already did it
      alert(`${newName} is already added to the phonebook`);
      return;
    }
    const newPerson = {name: newName, number: newNumber};
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );



  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <h2>Search</h2>
        <input
          type="text"
          placeholder="Search by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <form onSubmit={addName}>
        <div style={{ display: "flex", flexDirection: "column", width: "13%"}}>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person, index) => (
          <li key={index}>{person.name} - {person.number}</li>
        ))}
      </ul>

    </div>
  )
}

export default App