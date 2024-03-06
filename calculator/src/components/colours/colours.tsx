import React from 'react'

export default function colours() {

    const colours = [
        { name: 'red', hex: '#ff0000' },
        { name: 'green', hex: '#00ff00' },
        { name: 'blue', hex: '#0000ff' },
        { name: 'yellow', hex: '#ffff00' },
        { name: 'purple', hex: '#800080' },
        { name: 'orange', hex: '#ffa500' },
        { name: 'pink', hex: '#ffc0cb' },
        { name: 'black', hex: '#000000' },
        { name: 'white', hex: '#ffffff' },
        { name: 'grey', hex: '#808080' },
        { name: 'brown', hex: '#a52a2a' },
        { name: 'cyan', hex: '#00ffff' },
        { name: 'magenta', hex: '#ff00ff' },
        { name: 'teal', hex: '#008080' },
        { name: 'olive', hex: '#808000' },
        { name: 'maroon', hex: '#800000' },
    ]


    return (
        <div className='container'>
            <h1>Colours</h1>
            {colours.map((item) => (
                <div key={item.name} className="colour-item" style={{ backgroundColor: item.hex }}>
                    <strong>{item.name}</strong>: {item.hex}
                </div>
            ))}
        </div>

    )
}
