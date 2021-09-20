import React from "react";

import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  //Add a conditional return statement that returns a different JSX code when the condition is met
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  //the below return statement will be automatically rendered if the above if statement is not met
  //if what your component returns changes entirely based on a specific condition you can use this approac
  //it's not appropriate when only parts of the JSX content changes (like when we would have use this within the Expenses component)
  //therefore it's good to have this conditional content as separate component and insert it in Expenses component
  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
