import React, {useState} from "react";

function NewTransactionForm(){

    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")

    return(
        <form className="form">
            <label>
                Date:
                <input type="date" name="date" onChange={handleDate}/>
            </label>
            <label>
                Description:
                <input type="text" name="description" onChange={handleDescription}/>
            </label>
            <label>
                Category:
                <input type="text" name="category" onChange={handleCategory}/>
            </label>
            <label>
                Amount:
                <input type="number" name="amount" onChange={handleAmount}/>
            </label>
            <input type="submit" value="Add"/>
        </form>
    )
}

export default NewTransactionForm;