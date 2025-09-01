export const FormComponent = ({AddPerson, newName, AddNewPerson, number, AddNumber}) => {
    return (
        <form onSubmit={AddPerson}>
            <h2>Add a new</h2>
            <div>
                name: <input value={newName} onChange={AddNewPerson}/>
            </div>
            <div>
                number: <input value={number} onChange={AddNumber}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}