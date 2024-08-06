/**
 * Main
 */
import React from 'react';
import { useApp } from '../../hooks/useApp';
import AddTodo from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList';
/* styles */
import styles from './Main.module.css';

const Main: React.FC = () => {
  const { states, actions } = useApp();

  return (
    <main className={styles.main}>
      <section className={styles.commom}>
        <AddTodo 
          addInputValue={states.addInputValue} 
          onChangeAddInputValue={actions.onChangeAddInputValue} 
          handleAddTodo={actions.handleAddTodo}
          onkeyDonw={actions.onkeyDonw} 
        />
        <TodoList 
          todoList={states.todoList} 
          handleDeleteTodo={actions.handleDeleteTodo} 
        />
      </section>
    </main>
  );
};

export default Main;
