import React from "react";
import Form from "./Form.js";


function UserInput(props) {
    function saveExpenseData(ExpenseData) {
        const ExpenseData2 = {
            ...ExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(ExpenseData2);
    }
    return (
        <div className="mainUI">
            <Form onSaveExpenseData={saveExpenseData}></Form>
        </div>
    );
}

export default UserInput;