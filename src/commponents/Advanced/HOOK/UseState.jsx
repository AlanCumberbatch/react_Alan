import { useState } from "react";

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: '', by: '' });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  }
  return (
    <>

      <h2>demo B --- My Little Lemon Goals</h2>
      <form onSubmit={submitHandler}>
        <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
        <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
        <button>Submit Goal</button>
      </form>
    </>
  )
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map(g => (
        <li key={g.goal}>
          <span>My goal is to {g.goal}, by {g.by}</span>
        </li>
      ))}
    </ul>
  )
}

function UseState() {
  // Array destructuring,   Object destructuring
  let veggies = ['a', 'b', 'c'];
  const [a, b, c] = veggies;
  const [res, setRes] = useState(0);

  const [allGoals, updateAllGoals] = useState([]);
  // function addGoal(goal) { updateAllGoals([...allGoals, goal]) }
  const addGoal = (goal) => { updateAllGoals([...allGoals, goal]) }// OK

  return (
    <div style={{ border: '5px solid black' }}>
      <h1>useState</h1>
      <h2> demo A--- {res} ---<button onClick={() => setRes(res + 1)}>btn</button> </h2>
      <div>
        <GoalForm onAdd={addGoal} />
        <ListOfGoals allGoals={allGoals}  />
      </div>
    </div>
  )
}
export default UseState;