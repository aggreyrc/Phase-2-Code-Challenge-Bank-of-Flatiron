import React from "react";

function TransactionFilter(){
    return(
        <form className="filter-form">
            <label>
                Filter by Description:
                <input type="text" name="category"/>
            </label>
        </form>
    )
}

export default TransactionFilter;