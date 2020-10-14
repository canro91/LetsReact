import React from 'react';
import SearchStories from './SearchStories';
import Stories from './Stories';

const App = () => (
    <div className="app">
        <div className="interactions">
            <SearchStories />
        </div>
        <Stories />
    </div>
);

export default App;