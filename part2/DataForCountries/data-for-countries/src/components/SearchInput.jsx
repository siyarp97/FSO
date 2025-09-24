export function SearchInput({onChange, value}) {

    return (
        <label>
            find countries:<input onChange={onChange} value={value} />
        </label>
    )
}