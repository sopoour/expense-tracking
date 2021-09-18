import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  /* This is a stateful/smart component */

  //always handle the actual state management within the parent component
  //Then pass down the state and the state handler change
  const [filteredYear, setfilteredYear] = useState("2020");

  const handleChangedFilter = (selectedYear) => {
    setfilteredYear(selectedYear);
    console.log(selectedYear);
  };

  //By handling it like this, the ExpensesFilter is the component controlled by the Expenses component

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={handleChangedFilter}
      />
      {props.items.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
};

export default Expenses;
