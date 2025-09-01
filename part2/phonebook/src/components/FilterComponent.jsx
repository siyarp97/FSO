export const FilterComponent = ({filterPerson, filterPersonFunc}) => {
    return (
        <div>filter shown with <input value={filterPerson} onChange={filterPersonFunc}/></div>
    )
}