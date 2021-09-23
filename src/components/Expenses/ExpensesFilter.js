import React from "react";

import styled from "styled-components";

const ExpenseFilterContainer = styled.div`
  color: white;
  padding: 0 1rem;

  & div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
  }

  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & select {
    font: inherit;
    padding: 0.5rem 3rem;
    font-weight: bold;
    border-radius: 6px;
  }
`;

const ExpensesFilter = (props) => {
  //in the child component pass the listened event change up to the parent component
  //Where the changed value is then set to the state
  const handleDropdownChange = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <ExpenseFilterContainer>
      <div>
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleDropdownChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </ExpenseFilterContainer>
  );
};

export default ExpensesFilter;
