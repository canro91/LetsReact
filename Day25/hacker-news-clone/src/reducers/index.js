import { combineReducers }  from 'redux';
import archiveReducer  from './archive';
import storyReducer from './story';

const rootReducer = combineReducers({
    storyState: storyReducer,
    archiveState: archiveReducer
});

export default rootReducer;