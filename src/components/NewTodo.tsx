import { useRef, useContext } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent ) => {
        event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if(enteredText.trim().length === 0) {
        //throw an error
        return;
    }

     todosCtx.addTodo(enteredText);
    };


    return (
        <form className={classes.form} onSubmit= {submitHandler}>
            <label htmlFor='text'> To Do  </label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button> Add ToDo</button>
        </form>
    );
};

export default NewTodo;