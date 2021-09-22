import React, { useState } from "react";
import { Button } from "../UI/styles";
import styled from "styled-components";

const FormControl = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const FormControlItem = styled.div`
  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  & input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }
`;

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleChange = (event) => {
    //Take name and value from event object to dynamically insert below in [name]: value depending on which field is changed
    const { name, value } = event.target;
    //copy the object of newExpense state and set the name and value depending on which input is changed ([name])
    //if your state depends on the previous state, use the arrow function to pass prevState
    setUserInput((prevState) => ({
      //to not overwrite the other attributes/make them empty that are not changed but copy them in your new object, use spread operator "...prevState"
      ...prevState,
      //make lower case of name to match the attributes of state object since the name in the event is the same as the <label> which has capitel letter first
      [name.toLowerCase()]: value,
    }));
  };

  const handleSubmit = (event) => {
    //prevent that request is sent and that the page reloads when I click on "add expense" button
    event.preventDefault();
    //create new object where I convert the string date into date object
    //To-Do: figure out a way where I can already do it as soon as it's submitted within the state object userInput
    const expenseData = {
      title: userInput.title,
      amount: +userInput.amount, //+ is the same as parseInt()
      date: new Date(userInput.date),
    };

    props.onSaveExpenseData(expenseData);

    //set the values back to being empty
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormControlItem>
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={handleChange}
            name="Title"
          />
        </FormControlItem>
        <FormControlItem>
          <label>Amount</label>
          <input
            type="number"
            value={userInput.amount}
            min="0.01"
            step="0.01"
            onChange={handleChange}
            name="Amount"
          />
        </FormControlItem>
        <FormControlItem>
          <label>Date</label>
          <input
            type="date"
            value={userInput.date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleChange}
            name="Date"
          />
        </FormControlItem>
      </FormControl>
      <Button type="cancel" onClick={props.onCancel}>
        {" "}
        Cancel{" "}
      </Button>
      <Button type="submit">Add Expense</Button>
    </form>
  );
};

export default ExpenseForm;
