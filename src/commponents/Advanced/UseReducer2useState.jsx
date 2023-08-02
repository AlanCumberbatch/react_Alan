import { useReducer } from "react";

const reducer = (state, action) => {
  if(action.type === 'buy_ingredients') return {money: state.money - 10}
  if (action.type === 'sell_a_meal') return { money: state.money + 10 }
  if (action.type === 'celebrity_visit') return { money: state.money + 5000 }
  return state;
}
function UseReducer2useState() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{border:'5px solid black'}}>
      <h1>UseReducer2useState</h1>
      <h2>Wallet: {state.money}</h2>
      <div>
        <button onClick={()=> dispatch({type:'buy_ingredients'})}>Shopping for veggies!</button>
        <button onClick={()=> dispatch({type:'sell_a_meal'})}>Serve a meal.</button>
        <button onClick={()=> dispatch({type:'celebrity_visit'})}>Celebrity Visit</button>
      </div>
    </div>
  )
}
export default UseReducer2useState