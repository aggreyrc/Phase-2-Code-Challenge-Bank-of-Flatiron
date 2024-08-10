import React from "react";
import Transaction from "./Transaction";

function Transactionlist({ transactions }) {
  return (
    <div>
      <table>
        <thead>
          <tr className="transaction-table">
            <th>Transaction ID</th>
            <th>Transaction Date</th>
            <th>Description</th>
            <th>Transaction Category</th>
            <th>Transaction Amount</th>
          </tr>
        </thead>
        <tr className="transaction-table">
          {transactions.map((transaction) => (
            <Transaction key={transaction.id}
            id={transaction.id}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
             />
          ))}
        </tr>
      </table>
    </div>
  );
}

export default Transactionlist;
