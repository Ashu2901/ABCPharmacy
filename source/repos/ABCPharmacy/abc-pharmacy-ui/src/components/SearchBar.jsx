export default function SearchBar(
    { value, onChange }) {

    return (

        <input
            className="search-box"

            placeholder=
                "Search medicine..."

            value={value}

            onChange={
                e =>
                onChange(
                    e.target.value)
            }
        />
    );
}