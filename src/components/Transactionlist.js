import React, {useState} from "react";
import Transaction from "./Transaction";
import TransactionFilter from "./TransactionFilter";

function Transactionlist({ transactions }) {

     //searching by description
     const[searchTerm, setSearchTerm] = useState("")

     function handleSearch(event){
         setSearchTerm(event.target.value.toLowerCase())
     }

     const filteredTransactions = transactions.filter((transaction) => {
       if(searchTerm === ""){
         return true;
       }else{
         return transaction.description.toLowerCase().includes(searchTerm);
       }
     });
 

  return (
    <div>
        <TransactionFilter handleSearch = {handleSearch}/>
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
        <tbody className="transaction-table">
          {filteredTransactions
          .map((transaction) => (
            <Transaction key={transaction.id}
            id={transaction.id}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
             />
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default Transactionlist;
