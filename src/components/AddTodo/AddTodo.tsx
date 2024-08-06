/**
 * AddTodo
 */
import React from "react";
import Button from "../Button/Button";
/* styles */
import styles from './AddTodo.module.css';

interface AddTodoProps {
  addInputValue: string;
  onChangeAddInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: () => void;
  onkeyDonw: (e:React.KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * AddTodo
 * @param AddTodoProps 
 * @returns 
 */
const AddTodo: React.FC<AddTodoProps> = ({ addInputValue, onChangeAddInputValue, handleAddTodo, onkeyDonw }) => {
  return (
    <>
      <h2 className={styles.addTitle}>ADD Todo</h2>
      <form className={styles.inputContainer}>
        <input 
          type='text' 
          value={addInputValue}
          onChange={onChangeAddInputValue}
          onKeyDown={onkeyDonw} 
          className={styles.inputText}
        />
        <Button
        label='追加'
        onClick={handleAddTodo}
        type='submit'
        variant='secondary'
        width='100px'
        height='40px'
        disabled={!addInputValue.trim()} //入力フォームが空の時は非活性にする
        />
      </form>
    </>
  )
};

export default AddTodo;
