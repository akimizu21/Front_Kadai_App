/**
 * TodoList
 */
import React from 'react';
import Button from '../Button/Button';
/* styles */
import styles from './TodoList.module.css';

interface Todo {
  id: number;
  title: string;
}

interface TodoListProps {
  todoList: Todo[];
  handleDeleteTodo: (id: number, title: string) => void;
}

/**
 * TodoList
 * @param {TodoListProps} props 
 * @returns 
 */
const TodoList: React.FC<TodoListProps> = ({ todoList, handleDeleteTodo }) => {
  return (
    <ul className={styles.todoList}>
      {todoList.map((todo) => (
        <li className={styles.todo} key={todo.id}>
          <span className={styles.todoTask}>{todo.title}</span>
          <Button
            label='削除'
            onClick={() => handleDeleteTodo(todo.id, todo.title)}
            variant='tertiary'
            width='100px'
            height='40px'
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;