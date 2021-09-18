import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  //in the child component pass the listened event change up to the parent component
  //Where the changed value is then set to the state
  const handleDropdownChange = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleDropdownChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
