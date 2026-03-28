function Filter({ setFilter }) {
  return (
    <div className="filter">
      <button onClick={() => setFilter("ALL")}>All</button>
      <button onClick={() => setFilter("Electronics")}>Electronics</button>
      <button onClick={() => setFilter("Accessories")}>Accessories</button>
      <button onClick={() => setFilter("Fashion")}>Fashion</button>
    </div>
  );
}

export default Filter;