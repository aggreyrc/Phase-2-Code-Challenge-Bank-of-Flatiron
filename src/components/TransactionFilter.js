import React from "react";

function TransactionFilter({ handleSearch }) {
  return (
    <div>
      <input className="filter"
        type="search"
        placeholder="Search By Description"
        onChange={handleSearch}
      />
    </div>
  );
}

export default TransactionFilter;
