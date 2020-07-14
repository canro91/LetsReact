import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
    state = {
        characters: [
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
        ],
    }

    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    render() {
        const { characters } = this.state

        return (
            <div className="container">
                <Table charactersData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

export default App