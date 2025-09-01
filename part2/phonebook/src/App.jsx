import {useState} from 'react'
import {PersonInfo} from "./components/PersonInfo.jsx";
import {FormComponent} from "./components/FormComponent.jsx";
import {FilterComponent} from "./components/FilterComponent.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    ])
    const [newName, setNewName] = useState('')
    const [number, setNumber] = useState('')
    const [filterPerson, setFilterPerson] = useState('')

    function AddNewPerson(e) {
        e.preventDefault()
        setNewName(prev => e.target.value)
    }

    function AddNumber(e) {
        e.preventDefault()
        setNumber(prev => e.target.value)
    }

    function AddPerson(e) {
        e.preventDefault()
        if (persons.some(person => person.name === newName)) {
            return alert(`${newName} is already added!`)
        } else {
            return setPersons(prev => [...prev, {name: newName, number: number}])
        }
    }

    function filterPersonFunc(e) {
        e.preventDefault()
        setFilterPerson(prev => e.target.value)
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <FilterComponent filterPerson={filterPerson} filterPersonFunc={filterPersonFunc} />
            <FormComponent
                number={number}
                AddNumber={AddNumber}
                AddNewPerson={AddNewPerson}
                AddPerson={AddPerson}
                newName={newName}
            />

            <h2>Numbers</h2>

            <PersonInfo filterPerson={filterPerson} persons={persons}/>

        </div>
    )
}

export default App