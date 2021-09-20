import React, { useState } from "react";
import "./ExpenseForm.css";

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
      amount: +userInput.amount, //you can use + instead of parseInt()
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
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={handleChange}
            name="Title"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.amount}
            min="0.01"
            step="0.01"
            onChange={handleChange}
            name="Amount"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleChange}
            name="Date"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="cancel" onClick={props.onCancel}> Cancel </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
