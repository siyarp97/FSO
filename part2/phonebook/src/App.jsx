import {use, useEffect, useState} from "react";
import { PersonInfo } from "./components/PersonInfo.jsx";
import { FormComponent } from "./components/FormComponent.jsx";
import { FilterComponent } from "./components/FilterComponent.jsx";
import service from "./services/service.js";
import {ErrorMessage} from "./components/ErrorMessage.jsx";

export default function App() {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [number, setNumber] = useState("");
    const [filterPerson, setFilterPerson] = useState("");
    const [deletingId, setDeletingId] = useState(null);
    const [showError, setShowError] = useState(false)
    const [deltedErr, setDeletedErr] = useState(false)
    const [errorText, setErrorText] = useState('')

    useEffect(() => {
        service.getAll().then((res) => setPersons(res?.data ?? res)).catch(console.error);
    }, []);

    function handleNameChange(e) {
        setNewName(e.target.value);
    }

    function handleNumberChange(e) {
        setNumber(e.target.value);
    }

    function handleFilterChange(e) {
        setFilterPerson(e.target.value);
    }

    async function handleAddPerson(e) {
        e.preventDefault();
        const exists = persons.some(
            (p) => p.name.trim().toLowerCase() === newName.trim().toLowerCase()
        );
        if (exists) {
            if(confirm(`${newName} has already added. Would you like to replace it with new number?`)){
                const updatePerson = {name: newName.trim(), number:number.trim()}
                const person = persons.filter(p => p.name.trim().toLowerCase() === newName.trim().toLowerCase())
                console.log(person.id)
                await service.update(person[0].id, updatePerson)
                setPersons((prev) =>
                    prev.map((p) => (p.id === person[0].id ? { ...p, ...updatePerson } : p))
                );
            }
            setErrorText(`${newName} number changed`)
            setDeletedErr(false)
            setShowError(true)
            return;
        }

        try {
            const payload = { name: newName.trim(), number: number.trim() };
            const created = await service.create(payload);
            const createdPerson = created?.data ?? created;
            setErrorText(`${newName} added`)
            setDeletedErr(false)
            setShowError(true)
            setPersons((prev) => [...prev, createdPerson]);
            setNewName("");
            setNumber("");
        } catch (err) {
            console.error(err);
            alert("Kayıt sırasında bir hata oluştu.");
        }
    }

    async function handleDelete(id) {
        if (!confirm("Bu kişiyi silmek istediğine emin misin?")) return;
        try {
            setDeletingId(id);
            await service.deleteItem(id);
            setPersons((prev) => prev.filter((p) => p.id !== id));
        } catch (err) {
            console.error(err);
            const name = persons.find(p => p.id === id)
            setShowError(true)
            setDeletedErr(true)
            setErrorText(`${name.name} has already deleted.`)
            console.log(persons)
        } finally {
            setDeletingId(null);
        }
    }

    return (
        <div>
            {showError &&
                <ErrorMessage text={errorText} deleted={!!deltedErr}/>
            }
            <h2>Phonebook</h2>

            <FilterComponent
                filterPerson={filterPerson}
                filterPersonFunc={handleFilterChange}
            />

            <FormComponent
                number={number}
                AddNumber={handleNumberChange}
                AddNewPerson={handleNameChange}
                AddPerson={handleAddPerson}
                newName={newName}
            />

            <h2>Numbers</h2>
            <PersonInfo
                persons={persons}
                filterPerson={filterPerson}
                onDelete={handleDelete}
                deletingId={deletingId}
            />
        </div>
    );
}
