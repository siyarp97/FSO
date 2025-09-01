export const PersonInfo = ({persons, filterPerson}) => {
    if(filterPerson){
        const displayed = persons.filter(person => person.name.toLowerCase().includes(filterPerson.toLowerCase()))
        return displayed.map(item => <p>{item.name} {item.number}</p>)
    }
    return persons.map(person => <p>{person.name} {person.number}</p>)
}