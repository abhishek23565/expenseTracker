import React, { useState } from "react";
import "./Form.css";

function Form(props) {
    //Individual state approach for every part
    const [enteredTitle, newTitle] = useState('');
    const [enteredAmount, newAmount] = useState('');
    const [enteredDate, newDate] = useState('');

    //Single state approach for each part
    // const [userInp, setUI] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     eteredDate: '',
    // });

    function titleChangeHandler(event) {
        newTitle(event.target.value);
        //using single state approach 
        // setUI({
        //     ...userInp,
        //     enteredTitle:event.target.value;
        // });

        // OR

        // setUI((prevState)=>{
        //     return{...prevState,
        //     enteredTitle:event.target.value,};
        // });
    }

    function amountChangeHandler(event) {
        newAmount(event.target.value);
        //using single state approach 
        // setUI({
        //     ...userInp,
        //     enteredAmount:event.target.value,
        // });

        // OR

        // setUI((prevState)=>{
        //     return{...prevState,
        //     enteredAmount:event.target.value,};
        // });
    }

    function dateChangeHandler(event) {
        newDate(event.target.value);
        //using single state approach 
        // setUI({
        //     ...userInp,
        //     entereddate:event.target.value,
        // });

        //             OR

        // setUI((prevState)=>{
        //     return{...prevState,
        //     entereddate:event.target.value,};
        // });
    }

    function submitHandler(event) {
        event.preventDefault();
        const ExpenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(ExpenseData);

        //This is two way binding coz we store value in value attribute and then make the value empty string.
        newTitle('');
        newAmount('');
        newDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form_controls">
                <div className="form_control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className="form_control">
                    <label>Price</label>
                    <input type="number" value={enteredAmount} min="01" step="1" onChange={amountChangeHandler} />
                </div>

                <div className="form_control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>

                <button type="submit" className="btn">Add Expense</button>
            </div>
        </form>
    );
}

export default Form;