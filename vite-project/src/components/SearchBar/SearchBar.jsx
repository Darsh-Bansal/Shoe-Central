import './SearchBar.css';

function SearchBar({ value, onChange }) {
  return (
    <label className="searchbar-shell">
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search products"
        aria-label="Search products"
      />
    </label>
  );
}

export default SearchBar;
