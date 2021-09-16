import './Card.css';

const Card = (props) => {
    /* 
    * To avoid CSS elements repetition, you can create this wrapper/composition component
    * By this you have one Card.css whose classes can be shared across other components (ExpenseItem, Expenses)
    */
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;