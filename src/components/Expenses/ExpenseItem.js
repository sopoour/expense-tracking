import ExpenseDate from "./ExpenseDate";
import { Card } from "../UI/styles";
import styled from "styled-components";

const ExpenseItemCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;

  & h2 {
    color: #3a3a3a;
    font-size: 1rem;
    flex: 1;
    margin: 0 1rem;
    color: white;
  }
`;

const ExpenseDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;

  & div {
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #40005d;
    border: 1px solid white;
    padding: 0.5rem;
    border-radius: 12px;
  }

  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;

    & h2 {
      font-size: 1.25rem;
    }

    & div {
      font-size: 1.25rem;
      padding: 0.5rem 1.5rem;
    }
  }
`;

const ExpenseItem = (props) => {
  /*This is a stateless/dumb component cuz it doesn't have an interal state*/

  //But it is just there to output some data
  return (
    <li>
      <ExpenseItemCard>
        <ExpenseDate date={props.date} />
        <ExpenseDescription>
          <h2>{props.title}</h2>
          <div>{props.amount}</div>
        </ExpenseDescription>
      </ExpenseItemCard>
    </li>
  );
};

export default ExpenseItem;
