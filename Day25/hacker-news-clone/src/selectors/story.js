const getReadableStories = ({ storyState, archiveState }) =>
    storyState.filter(story => isNotArchived(story, archiveState));

const isNotArchived = (story, archiveState) =>
    archiveState.indexOf(story.objectID) === -1;

export {
    getReadableStories,
};