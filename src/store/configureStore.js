import { createStore } from 'redux';
import boardsReducer from './../reducers/boards';

export default () => {
	const store = createStore(boardsReducer);
	return store;
};
