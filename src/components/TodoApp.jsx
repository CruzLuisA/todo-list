// UUID
import { v4 as uuidv4 } from 'uuid'

// REACT
import { useState } from 'react'

// MANTINE
import { Container } from '@mantine/core'

// TODO
import TodoForm from './TodoForm'
import TodoList from './TodoList';

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTask) => { 
        const newTodo = {
            id: uuidv4(),
            task: newTask,
            isComplete: false,
        }
        setTodos([
            ...todos,
            newTodo 
        ])
    }

    const toggleTodo = (targetId) => {
        const updateTodos = todos.map(todo =>{
            if (todo.id == targetId){
                todo = {
                    ...todo,
                    isComplete: !todo.isComplete,
                }
            }
            return todo;
        })
        setTodos(updateTodos);
    }

    const deleteTodo = (targetId) => {
        const updatedTodos = todos.filter(todo => todo.id !== targetId);
        setTodos(updatedTodos);
    }

    return (
    <Container>
        <h3>Todo List</h3>
        <TodoForm addTodo={addTodo}  />
        <TodoList todos= {todos} toggleTodo= {toggleTodo} deleteTodo= {deleteTodo} />
    </Container>
)
}

export default TodoApp