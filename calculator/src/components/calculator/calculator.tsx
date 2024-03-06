import React from 'react'

export default function calculator() {
    return (
        <div className='container'>
            <h1>Calculator</h1>
            <p>Let's build a calculator!</p>
            <p>The todolist has given you the bacics to make a simple calculator</p>

            <p>The calculator should be able to do the follow</p>
            <ul>
                <li>Addition (+)</li>
                <li>Subtraction (-)</li>
                <li>Multiplication (*)</li>
                <li>Division (/)</li>
            </ul>
            <div className='calculator'></div>
        </div >
    )
}
