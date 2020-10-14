import React from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';

const SearchStories = ({ onFetchStories }) => {
    const [query, setQuery] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (query) {
            onFetchStories(query)

            setQuery('');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <Button type="submit">
                Search
            </Button>
        </form>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onFetchStories: (query) => dispatch(doFetchStories(query)),
});

export default connect(null, mapDispatchToProps)(SearchStories);