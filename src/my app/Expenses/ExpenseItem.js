import React from "react";
// import React, { useState } from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate.js";

function ExpenseItem(data) {
    // const [title, newTitle] = useState(data.title);
    // function clickHandler(event) {
    //     //newTitle function helps us to calling the component function ExpenseItem every time we are clicking on the button.
    //     newTitle("New Bed");
    //     //The value of title consoled will be the former one every time,
    //     // means if I'm clicking the button the value consoled is the value that the element had before not the updated one.
    //     // console.log(title);
    // }
    return (
        <div className="expense-item">
            <ExpenseDate dates={data.date}></ExpenseDate>
            <div className="expense-item__description">
                <h1>{data.title}</h1>
            </div>
            <div className="expense-item__price">
                Rs {data.amount}
            </div>
            {/* <button onClick={clickHandler}>Update</button> */}

        </div>

    );
}

export default ExpenseItem;