import React from 'react';
import { Paper, TextField } from '@material-ui/core';

const SearchBar = ({ handleSubmit }) => {
    const [searchTerm, setSearchTerm] = React.useState('');

    return (
        <Paper elevation={6} style={{ padding: '25px' }}>
            <form onSubmit={(evt) => { evt.preventDefault(); handleSubmit(searchTerm); }}>
                <TextField
                    fullWidth label="Search..."
                    value={searchTerm}
                    onChange={(evt) => setSearchTerm(evt.target.value)}
                />
            </form>
        </Paper>
    );
}

export default SearchBar;