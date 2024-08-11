import React, {useState, useEffect} from 'react';
import './App.css';
import Transactionlist from './Transactionlist';
import NewTransactionForm from './NewTransactionForm';

function App() {

  //fetching data form json server
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
    .then((response) => response.json())
    .then((transactions) => setTransactions(transactions))
    .catch((error) => console.error('Error Fetching Data:', error));
  }, []);

  //Adding new transaction
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")

  function handleDate(e){
      setDate(e.target.value)
  }

  function handleDescription(e){
      setDescription(e.target.value)
  }

  function handleCategory(e){
      setCategory(e.target.value)
  }

  function handleAmount(e){
      setAmount(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    const lastTransactionId = transactions.length > 0 ? transactions[transactions.length - 1].id : 0;
    const newTransactionId = lastTransactionId + 1;
    const newTransaction = {
      id: newTransactionId,
      date: date, 
      description:description, 
      category:category,
      amount: amount,
     };
     const newTransactionsArray = [...transactions, newTransaction]
     setTransactions(newTransactionsArray);
     setDate("");
     setDescription("");
     setCategory("");
     setAmount("");
  }



  return (
    <div className="App">
      <h1>BANK OF FLATIRON</h1>
      <NewTransactionForm 
      date={date}
      description={description}
      category={category}
      amount={amount}
      handleDate={handleDate}
      handleDescription={handleDescription}
      handleCategory={handleCategory}
      handleAmount={handleAmount}
      handleSubmit={handleSubmit}
      />
      <Transactionlist 
      transactions={transactions}/>
      
    </div>
  );
}

export default App;
