import React from "react";

function Transaction({ id, date, description, category, amount }) {
  return (
    <div >
    <tr className="transaction-table">
      <td>{id}</td>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
    </div>
  );
}

export default Transaction;
