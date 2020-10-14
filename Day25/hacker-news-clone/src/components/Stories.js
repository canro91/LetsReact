import React from 'react';
import './Stories.css'
import StoriesHeader from './StoriesHeader';

import Story from './Story';

const COLUMNS = {
    title: {
        label: 'Title',
        width: '40%',
    },
    author: {
        label: 'Author',
        width: '30%',
    },
    comments: {
        label: 'Comments',
        width: '10%',
    },
    points: {
        label: 'Points',
        width: '10%',
    },
    archive: {
        width: '10%',
    },
};

const Stories = ({ stories, onArchive }) => (
    <div className="stories">
        <StoriesHeader columns={COLUMNS} />

        {
            (stories || []).map(story =>
                <Story
                    key={story.objectID}
                    story={story}
                    columns={COLUMNS}
                    onArchive={onArchive}
                />)
        }
    </div>
);

export default Stories;