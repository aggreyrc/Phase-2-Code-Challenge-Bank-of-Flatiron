import React, {useState, useEffect} from 'react';
import './App.css';
import Transactionlist from './Transactionlist';
import NewTransactionForm from './NewTransactionForm';
import TransactionFilter from './TransactionFilter';

function App() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then((response) => response.json())
    .then((transactions) => setTransactions(transactions))
    .catch((error) => console.error('Error Fetching Data:', error));
  }, []);


  return (
    <div className="App">
      <h1>BANK-OF-FLATIRON</h1>
      <TransactionFilter/>
      <NewTransactionForm/>
      <Transactionlist 
      transactions={transactions}/>
      
    </div>
  );
}

export default App;
