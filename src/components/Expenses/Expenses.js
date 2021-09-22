import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import styled from "styled-components";

//Extend the Card styled component with additional properties
const ExpenseCard = styled(Card)`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
`;

const Expenses = (props) => {
  /* This is a stateful/smart component */

  //always handle the actual state management within the parent component
  //Then pass down the state and the state handler change
  const [filteredYear, setfilteredYear] = useState("2020");

  const handleChangedFilter = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  //filter based on the selected year:
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  });

  /* 
  More complex solution that is not really necessary to utalize since all we need to do is manupluate 
  the already coming in data and add a condition of what should be rendered (aka filter)

  const [filteredResult, setFilteredResult] = useState(props.items);

  useEffect(() => {
    (async () => {
      const results = await props.items.filter((value) => {
        return value.date.getFullYear() == parseInt(filteredYear);
      });
      setFilteredResult(results);
    })();
  }, [props.items, filteredYear]); */

  //By handling it like this, the ExpensesFilter is the component controlled by the Expenses component

  return (
    <ExpenseCard>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={handleChangedFilter}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </ExpenseCard>
  );
};

export default Expenses;
