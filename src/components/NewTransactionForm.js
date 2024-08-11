import React from "react";

function NewTransactionForm({date,description,category,amount,handleDate,handleDescription,handleCategory,handleAmount,handleSubmit}){

    return(
        <form className="form" onSubmit={handleSubmit}>
            <label>
                Date:
                <input type="date" name="date" onChange={handleDate} value={date}/>
            </label>
            <label>
                Description:
                <input type="text" name="description" onChange={handleDescription} value={description}/>
            </label>
            <label>
                Category:
                <input type="text" name="category" onChange={handleCategory} value={category}/>
            </label>
            <label>
                Amount:
                <input type="number" name="amount" onChange={handleAmount} value={amount}/>
            </label>
            <input type="submit" value="Add"/>
        </form>
    )
}

export default NewTransactionForm;