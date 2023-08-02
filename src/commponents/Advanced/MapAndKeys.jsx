import { useState } from "react";

function MapAndKeys() {
  const [todoList, setTodoList] = useState([
    {
      id: 'tool1',
      time: '18:00'
    },
    {
      id: 'tool2',
      time: '23:26'
    }
  ]);
  const reverseOrder = () => {
    setTodoList(()=>[...todoList].reverse());
  };
  return (
    <div style={{backgroundColor:'skyblue'}}>
      <p>Map And Keys---using Index as key</p>
      <table>
        <tbody>
          {todoList.map((todo, index) => (
            // <Todo key={index} id={todo.id} time={todo.time}></Todo>
            <tr key={index}>
              <td>
                <span>{todo.id}</span>
                <input type="text" />
                <span>{todo.time}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={reverseOrder}>Reverse to show use index as keys is useless sometimes</button>
    </div>
  )
}
export default MapAndKeys;