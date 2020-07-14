import React, { Component } from 'react'
import Table from './Table'

class App extends Component {

    render() {
        const characters = [
            {
                'name': 'Captain America',
                'job': 'Super Soldier'
            },
            {
                'name': 'Tony Starks',
                'job': 'Engineer, among other things'
            },
            {
                'name': 'Bruce Banner',
                'job': 'Getting angry'
            },
        ]

        return (
            <div className="container">
                <Table charactersData={characters} />
            </div>
        )
    }
}

export default App