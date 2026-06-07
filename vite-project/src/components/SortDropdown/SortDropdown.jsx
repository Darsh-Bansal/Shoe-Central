import './SortDropdown.css';

const options = [
  { value: 'default', label: 'Sort by' },
  { value: 'price-asc', label: 'Price: Low → High' },
  { value: 'price-desc', label: 'Price: High → Low' },
  { value: 'newest', label: 'Newest First' },
  { value: 'best-seller', label: 'Best Sellers' },
  { value: 'sale', label: 'Sale' },
];

function SortDropdown({ value, onChange }) {
  return (
    <div className="sort-dropdown-shell">
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortDropdown;
