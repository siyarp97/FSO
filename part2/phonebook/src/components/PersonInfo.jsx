export const PersonInfo = ({ persons, filterPerson, onDelete, deletingId }) => {
    const list = filterPerson
        ? persons.filter((p) =>
            p.name.toLowerCase().includes(filterPerson.toLowerCase())
        )
        : persons;

    return (
        <>
            {list.map((person) => (
                <div key={person.id}>
                    <p>
                        {person.name} {person.number}
                    </p>
                    <button
                        onClick={() => onDelete(person.id)}
                        disabled={deletingId === person.id}
                    >
                        {deletingId === person.id ? "Deleting..." : "Delete"}
                    </button>
                </div>
            ))}
        </>
    );
};
