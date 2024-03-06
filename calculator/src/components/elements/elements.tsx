import React from 'react'

export default function elements() {
    const htmlTags = [
        { tag: '<div>', description: 'Container element til layout eller gruppering af indhold.' },
        { tag: '<h1> - <h6>', description: 'Overskrift tags til strukturering af tekst efter vigtighed.' },
        { tag: '<p>', description: 'Definerer et afsnit med tekst.' },
        { tag: '<button>', description: 'Bruges til klikbare knapper i formularer og andre steder.' },
        { tag: '<input>', description: 'Bruges til at oprette inputfelter i formularer.' },
        { tag: '<label>', description: 'Bruges til at oprette et label til et inputfelt.' },
        { tag: '<ul>', description: 'Bruges til at oprette en liste med punkter.' },
        { tag: '<ol>', description: 'Bruges til at oprette en nummereret liste.' },
        { tag: '<li>', description: 'Bruges til at oprette et punkt i en liste.' },
        { tag: '<a>', description: 'Bruges til at oprette et hyperlink.' },
        { tag: '<img>', description: 'Bruges til at vise et billede.' },
        { tag: '<form>', description: 'Bruges til at oprette en formular.' },
        { tag: '<select>', description: 'Bruges til at oprette en dropdown liste.' },
        { tag: '<option>', description: 'Bruges til at oprette en valgmulighed i en dropdown liste.' },
        { tag: '<table>', description: 'Bruges til at oprette en tabel.' },
        { tag: '<tr>', description: 'Bruges til at oprette en række i en tabel.' },
        { tag: '<td>', description: 'Bruges til at oprette en celle i en tabel.' },
    ];

    return (
        <div className='container'>
            <h1>Elements</h1>
            {htmlTags.map((item) => (
                <div key={item.tag} className="html-tag-item">
                    <strong><code>{item.tag}</code></strong>:
                    -{item.description}
                </div>
            ))}
        </div>
    )
}
