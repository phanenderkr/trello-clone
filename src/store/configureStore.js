import { createStore, combineReducers } from 'redux';
import reducer from '../reducers/Reducer';

export default () => {
	const store = createStore(
		combineReducers({
			teams: reducer
		})
	);
	return store;
};
