import {useState, useEffect} from 'react'
import {PersonInfo} from "./components/PersonInfo.jsx";
import {FormComponent} from "./components/FormComponent.jsx";
import {FilterComponent} from "./components/FilterComponent.jsx";
import axios from "axios";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [number, setNumber] = useState('')
    const [filterPerson, setFilterPerson] = useState('')

    useEffect(() => {
        axios
            .get("http://localhost:3001/persons\n")
            .then(res => setPersons(res.data))
    }, []);

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