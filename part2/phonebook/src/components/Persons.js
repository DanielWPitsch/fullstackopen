const Persons = ({ persons }) => (
  <ul>
    {persons.map((person, index) => (
      <li key={index}>
        {person.name} - {person.number}
      </li>
    ))}
  </ul>
)

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      name: <input value={newName} onChange={handleNameChange} />
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const Filter = ({ filter, handleFilterChange }) => (
  <div>
    <h3>Search</h3>
    <input
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
    />
  </div>
)

export  { Persons, PersonForm, Filter}
