import React, { Component } from 'react'

// A simple component is just a function returning some JSX
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.charactersData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const { charactersData } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody charactersData={charactersData} />
            </table>
        )
    }
}

export default Table