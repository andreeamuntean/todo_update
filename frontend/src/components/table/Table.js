import { Table, TableBody, TableCell, TableRow, TableHead } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import React, { useState, useEffect } from 'react'
import axios from '../../utils/axios'


function TableComponent() {

    const [todos, setTodos] = useState([])

    const getTodos = () => axios.get('/todos').then(response => {
        setTodos(response.data.todo)
    }).catch(err => {
        console.log(err)
    })

    const deleteTodo = id => axios.delete(`/todos/${id}`).then(() => getTodos())

    useEffect(() => {
        getTodos()
    }, [])

    return <Table>
        <TableHead>
            <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Actions</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {todos.map((todo, index) => <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{todo.title}</TableCell>
                <TableCell><IconButton onClick={() => deleteTodo(todo._id)}>
                    <DeleteIcon />
                </IconButton></TableCell>
            </TableRow>)}
        </TableBody>
    </Table>
}

export default TableComponent
