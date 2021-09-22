import React from "react";
import styled, { css } from "styled-components";
import ExpenseItem from "./ExpenseItem";

//TO-DO: the passing on of props doesn't work, figure ou how to use the elements of expenses-list_fallback as condition
const ExpensesListContainer = styled.ul`
  list-style: none;
  padding: 0;
  color: ${props => props.itemLength === 0 ? 'white' : ''};
  text-align: ${props => props.itemLength === 0 ? 'center' : ''};

  ${(props) =>
    props.itemLength === 0 &&
    css`
      color: white;
      text-align: center;
    `}
`;

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
    <ExpensesListContainer itemLength={props.items.length}>
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ExpensesListContainer>
  );
};

export default ExpensesList;
