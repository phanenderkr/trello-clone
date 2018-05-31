const boardsReducerDefaultState = [];

// Reducer
const boardsReducer = (state = boardsReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_BOARD':
			return [...state, action.board];
			break;
		default:
			return state;
			break;
	}
};

export default boardsReducer;
