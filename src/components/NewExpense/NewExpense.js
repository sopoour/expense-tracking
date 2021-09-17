import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    //function is called within the ExpenseForm when submitting the expense and gets the expenseData passed to it
    const handleSaveExpense = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            //add an id attribute to the object
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleSaveExpense} />
    </div>
  );
};

export default NewExpense;
