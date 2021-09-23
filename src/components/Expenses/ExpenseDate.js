import styled from "styled-components";

const ExpenseDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

//To-Do: how can I incorporate the styling of the month, day and year stylings within the above styled component?

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <ExpenseDateContainer>
      <div style={{fontSize: '0.75rem', fontWeight: 'bold'}} >{month}</div>
      <div style={{fontSize: '1.5rem', fontWeight: 'bold'}}>{day}</div>
      <div style={{fontSize: '0.75rem'}}>{year}</div>
    </ExpenseDateContainer>
  );
};

export default ExpenseDate;
