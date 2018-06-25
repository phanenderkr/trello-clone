import {
	ADD_BOARD,
	REMOVE_BOARD,
	ADD_TEAM,
	REMOVE_TEAM,
	ADD_LIST,
	REMOVE_LIST,
	ADD_CARD,
	REMOVE_CARD
} from '../actions/Actions';

const reducerDefaultState = {}; //? teams

// Reducer
const reducer = (state = reducerDefaultState, action) => {
	let newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case ADD_TEAM:
			var { team } = action;
			return { ...state, [team.id]: team };

		case REMOVE_TEAM:
			delete newState[action.id];
			return newState;

		case ADD_BOARD:
			var { board, teamID } = action;
			var team = newState[teamID];
			team.boards[board.id] = board;
			return newState;

		case REMOVE_BOARD:
			var { id, teamID } = action;
			var team = newState[teamID];
			delete team.boards[id];
			return newState;

		case ADD_LIST:
			var { boardID, teamID, list } = action;
			var board = newState[teamID].boards[boardID];
			board.lists[action.list.id] = list;
			return newState;

		case REMOVE_LIST:
			var { id, teamID, boardID } = action;
			var board = newState[teamID].boards[boardID];
			delete board.lists[id];
			return newState;

		case ADD_CARD:
			var { teamID, boardID, listID, card } = action;
			var list = newState[teamID].boards[boardID].lists[listID];
			list.cards[card.id] = card;
			return newState;

		case REMOVE_CARD:
			var { teamID, boardID, listID, id } = action;
			var list = newState[teamID].boards[boardID].lists[listID];
			delete list.cards[id];
			return newState;

		default:
			return state;
	}
};

export default reducer;
