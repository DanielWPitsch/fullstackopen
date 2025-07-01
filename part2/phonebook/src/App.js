import { useState } from 'react'
import { Filter, PersonForm, Persons} from './components/Persons'

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

  const handleNameChange = (e) => setNewName(e.target.value)
  const handleNumberChange = (e) => setNewNumber(e.target.value)
  const handleFilterChange = (e) => setFilter(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameExists = persons.some(person => person.name === newName);
    if(nameExists){
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
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm
        newName = {newName}
        newNumber = {newNumber}
        handleNameChange = {handleNameChange}
        handleNumberChange = {handleNumberChange}
        handleSubmit = {handleSubmit}      
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App