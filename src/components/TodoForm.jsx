import { useState } from "react"

import { Button, Card, Flex, TextInput} from '@mantine/core'

function TodoForm({ addTodo }) {
    const [task, setTask] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        setTask(e.target.value);
        if (e.target.value.length >= 5){
            setIsValid(true)
        } else {
            setIsValid(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            addTodo(task);
            setTask('');
        }
    }

    return (
    <Card sx={{marginBottom: 20, padding: 'md'}}>
        <form onSubmit={handleSubmit} >
            <Flex gap='md'>
                <TextInput
                    sx={{flextGrow:1}}
                    placeholder='What needs to get done'
                    value={task}
                    onChange={handleChange}
                    />
                <Button 
                    type="submit" 
                    variant="gradient" 
                    gradient={{ from: 'green', to: 'blue'}}
                    disabled={!isValid}>
                    Add To List
                </Button>
            </Flex>
        </form>
    </Card>
)
}

export default TodoForm