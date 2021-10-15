import React, { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([])
  const [currentId, setCurrentId] = useState(1)
  const [desc, setDesc] = useState("")

  function onAdd() {
    const todo = { id: currentId, desc }

    setCurrentId(currentId + 1)
    setTodoList([...todoList, todo])
  }

  function onDelete(event) {
    const id = Number(event.target.dataset.id)
    const newTodoList = todoList.filter(todo => todo.id !== id)

    setTodoList(newTodoList)
  }

  function onSaveServer() {
    // console.log(`서버에 전달`)
  }

  return (
    <div>
      <h3>할 일 목록</h3>
      <ul>
        {
          todoList.map((todo) => 
            <li key={todo.id}>
              <span>{todo.desc}</span>
              <button data-id={todo.id} onClick={onDelete}>삭제</button>
            </li>
          )
        }
      </ul>
      <input type="text" value={desc} onChange={e => setDesc(e.target.value)}></input>
      <button type="button" onClick={onAdd}>추가</button>
      <button type="button"  onClick={onSaveServer}>서버에 저장</button>
    </div>
  );
}

export default App;
