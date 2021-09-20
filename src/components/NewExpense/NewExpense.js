import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  //function is called within the ExpenseForm when submitting the expense and gets the expenseData passed to it
  const handleSaveExpense = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      //add an id attribute to the object
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };

  return (
    <div className="new-expense">
      {!isOpen && (
        <button
          style={{ textAlign: "center" }}
          onClick={handleOpenForm}
        >
          Add New Expense
        </button>
      )}
      {isOpen && (
        <ExpenseForm
          onCancel={handleCloseForm}
          onSaveExpenseData={handleSaveExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
