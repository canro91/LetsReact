import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        characters: []
    }

    // Why this function is here instead of TableBody?
    // The component holding the state is App
    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = (character) => {
        this.setState({characters: [character, ...this.state.characters]})
    }

    render() {
        const { characters } = this.state

        return (
            <div className="container">
                <Form handleSubmit={this.handleSubmit} />
                <Table charactersData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

export default App