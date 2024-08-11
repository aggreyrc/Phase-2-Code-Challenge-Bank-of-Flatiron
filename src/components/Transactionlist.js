import React, { useState } from "react";
import TransactionFilter from "./TransactionFilter";

function Transactionlist({ transactions }) {
    
  //searching by description
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event) {
    setSearchTerm(event.target.value.toLowerCase());
  }

  const filteredTransactions = transactions.filter((transaction) => {
    if (searchTerm === "") {
      return true;
    } else {
      return transaction.description.toLowerCase().includes(searchTerm);
    }
  });

  return (
    <div>
      <TransactionFilter handleSearch={handleSearch} />
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Transaction Date</th>
            <th>Description</th>
            <th>Transaction Category</th>
            <th>Transaction Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactionlist;
