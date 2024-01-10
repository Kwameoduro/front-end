import './index.css';
import {useState} from "react";

const ToDo = props => (
  <tr>
    <td>
      <label>
      {props.id}
      </label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

function App () {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '18:00',
  },
  {
    id: 'todo2',
    createdAt: '23:00',
  }]);


  const reverseOrder = () => {
    // Reverse is a mutative operation, so we need to create a new array first.
    setTodos([...todos].reverse());
  }

// first example with keys, show browser console to see the warning
  return (
    <div>
      <buttton onClick = {reverseOrder}> Reverse</buttton>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <ToDo key = {index} id ={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
}