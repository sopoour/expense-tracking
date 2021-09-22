import React, { useState } from "react";
import styled from "styled-components";
import ExpenseForm from "./ExpenseForm";
import { Button } from "../UI/styles";

const NewExpenseContainer = styled.div`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  //align buttons dependent whether form is open or closed
  text-align: ${props => props.open ? 'right' : 'center'};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;


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
    <NewExpenseContainer open={isOpen}>
      {!isOpen && (
        <Button onClick={handleOpenForm}>
          Add New Expense
        </Button>
      )}
      {isOpen && (
        <ExpenseForm
          onCancel={handleCloseForm}
          onSaveExpenseData={handleSaveExpense}
        />
      )}
    </NewExpenseContainer>
  );
};

export default NewExpense;
