import React from "react";

function NewTransactionForm(){

    return(
        <form className="form">
            <label>
                Date:
                <input type="date" name="date"/>
            </label>
            <label>
                Description:
                <input type="text" name="description"/>
            </label>
            <label>
                Category:
                <input type="text" name="category"/>
            </label>
            <label>
                Amount:
                <input type="number" name="amount"/>
            </label>
            <input type="submit" value="Add"/>
        </form>
    )
}

export default NewTransactionForm;