import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  //generate all months within a year and insert it as label for each created object
  const chartDataPoints = Array.from({ length: 12 }, (item, i) => {
    return {
      label: new Date(0, i).toLocaleString("en-US", { month: "short" }),
      value: 0,
    };
  });

  /**
   * OutPut: 
   * (12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    0: {label: 'Jan', value: 0}
    1: {label: 'Feb', value: 0}
    2: {label: 'Mar', value: 0}
    3: {label: 'Apr', value: 0}
    4: {label: 'May', value: 0}
    5: {label: 'Jun', value: 0}
    6: {label: 'Jul', value: 0}
    7: {label: 'Aug', value: 0}
    8: {label: 'Sep', value: 0}
    9: {label: 'Oct', value: 0}
    10: {label: 'Nov', value: 0}
    11: {label: 'Dec', value: 0}
    length: 12
    [[Prototype]]: Array(0)
   */

  console.log(chartDataPoints);

  //loop through each expense in the expenses array
  for (const expense of props.expenses) {
    //get the month from the date props of the respectively looped expense
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January
    //update value for the extracted month of that expense in the new array by increasing the value by the amount of the respectively looped expense
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
