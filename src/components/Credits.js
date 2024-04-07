/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Credits = (props) => {
  // Create the list of Credit items
  let creditsView = () => {
    const { credits } = props;
    return credits.map((credit) => {  // Extract "id", "amount", "description" and "date" properties of each credits JSON array element
      let date = credit.date.slice(0, 10);
      return <li key={credit.id}> ${credit.amount.toFixed(2)} -- {credit.description} -- {date}</li>
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    props.addCredit({
      description: e.target.description.value,
      amount: Number.parseFloat(e.target.amount.value)
    });

    e.target.description.value = "";
    e.target.amount.value = "";
  }

  // Render the list of Credit items and a form to input new Credit item
  return (
    <div>
      <h1>Credits</h1>

      {creditsView()}

      <form onSubmit={submitHandler}>
        <input type="text" name="description" placeholder="description" required />
        <input type="number" name="amount" placeholder='amount' min={0} step={0.01} required />
        <button type="submit">Add Credit</button>
      </form>

      <br />
      <AccountBalance accountBalance={props.balance} />
      <br />

      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;