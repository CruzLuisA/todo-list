import { Card, Checkbox, Flex, ThemeIcon, Tooltip } from '@mantine/core'
import { IconTrash } from '@tabler/icons'

function TodoItem({todo, toggleTodo, deleteTodo }) {
    return (
    <Card sx={{ overflow: 'visible', marginBottom: 8 }} >
        <Flex gap='md' >
            <Checkbox
            checked= { todo.isComplete }
            label={todo.task}
            sx={{
                flexGrow: 1,
                textDecoration: todo.isComplete ? 'line-through' : 'none' }}
            onChange={() => toggleTodo(todo.id)}
            />
            <Tooltip label='delete' transition='skew-down' sx={{ fontSize: 13 }} >
                <ThemeIcon sx={{ cursor: 'pointer' }} onClick={() => deleteTodo(todo.id) } >
                    <IconTrash/>
                </ThemeIcon>
            </Tooltip>
        </Flex>
    </Card>
    )
}

export default TodoItem