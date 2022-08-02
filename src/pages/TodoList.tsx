import React from 'react'
import { useState, useRef } from 'react';
import Todo from '../pages/Todo';
import InputBox from '../component/InputBox';
import { NewTodo } from '../../@types/global';

const TodoList = () => {
  const[inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일 1',
        completed: false,
    },
    {
        id: 2,
        text: '할일 2',
        completed: false,
    },
    {
        id: 3,
        text: '완료한일 1',
        completed: true,
    }
  ]);
  const nextId = useRef(4);
  // 할일 체크
  const onClickCheck = (id :number) =>{
    setTodos(todos.map(
      todo =>
      todo.id === id ? {...todo, completed : !todo.completed} : todo
    ))
  }
  // 할일 삭제
  const onDelteBtn = (id :number) =>{
    setTodos(todos.filter(todo => todo.id !== id));
  }
  const onInputTextChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setInputText(e.target.value);
  }
  const onInputKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key === "Enter"){
      const newTodo :NewTodo ={
        id:nextId.current,
        text:inputText,
        completed:false
      }
      setTodos(todos.concat(newTodo));
      setInputText("");
      nextId.current += 1;
    }
  }
  return (
    <>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onClickCheck={onClickCheck}
          onDelteBtn={onDelteBtn}
        />
      )}
      <InputBox
        onChange={onInputTextChange}
        onKeyDown={onInputKeyDown}
        inputText={inputText}
      />
    </>
  )
}

export default TodoList