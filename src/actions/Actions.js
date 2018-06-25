//* Import statements
import uuid from 'uuid';

//* Action names
export const ADD_TEAM = 'ADD_TEAM';
export const REMOVE_TEAM = 'REMOVE_TEAM';
export const ADD_BOARD = 'ADD_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

// ?=========================================================
//? ===============Teams related action creators================
// ?=========================================================

//* Add Team
export const addTeam = (name = '') => ({
	type: ADD_TEAM,
	team: {
		name,
		id: uuid(),
		boards: {}
	}
});

//* Remove Team
export const removeTeam = id => ({
	type: REMOVE_TEAM,
	id
});

// ?=========================================================
//? =================Boards related action creators=============
// ?=========================================================

//* Add board
export const addBoard = (teamID, name = '') => ({
	type: ADD_BOARD,
	teamID,
	board: {
		name,
		id: uuid(),
		lists: {}
	}
});

//* Remove board
export const removeBoard = (teamID, id) => ({
	type: REMOVE_BOARD,
	id,
	teamID
});

// ?=========================================================
//? ================Lists related action creators================
// ?=========================================================

export const addList = (teamID, boardID, name) => ({
	type: ADD_LIST,
	teamID,
	boardID,
	list: {
		name,
		id: uuid(),
		cards: {}
	}
});

//* Remove board
export const removeLIST = (teamID, boardID, id) => ({
	type: REMOVE_LIST,
	id,
	teamID,
	boardID
});

// ?=========================================================
//? =============Cards related action creators===================
// ?=========================================================

// * ADD card
export const addCard = (teamID, boardID, listID, name) => ({
	type: ADD_CARD,
	teamID,
	boardID,
	listID,
	card: {
		name,
		id: uuid()
	}
});

// * Remove card
export const removeCard = (teamID, boardID, listID, id) => ({
	type: REMOVE_CARD,
	teamID,
	boardID,
	listID,
	id
});
