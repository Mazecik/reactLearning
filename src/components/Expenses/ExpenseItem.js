import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

    let title = props.title;

    const clickHandler = () => {
        title = 'CHANGED';
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount} PLN</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
};

export default ExpenseItem;
