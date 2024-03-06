import React from 'react'

export default function TodoList() {
    return (
        <div className='container'>
            <h1>Todo list</h1>
            <p>Let's build a todo list!</p>
            <p>Before you start: </p>
            <ul>
                <li>Take a good look in the elements container to see which elements you have at your disposal</li>
                <li>See if you can find "div","h1" and "li" in some of the files and check how they are used</li>
            </ul>
            <p>Tasks:</p>
            <ul>
                <li>Find the elements you need to create this todolist</li>
                <li>Create a todo list with your morning routine</li>
                <li>Make it look nice</li>
                <li>Make an input field</li>
                <li>Make a button to add a task to the todo list - (Look up "useState react" on google)</li>
                <li>Make it possible to remove the items in the todo list</li>
            </ul>
        </div>
    )
}
