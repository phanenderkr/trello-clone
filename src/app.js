import React from 'react';
import { render } from 'react-dom';
import createStore from './store/configureStore';
import { addBoard } from './actions/boards';

const store = createStore();

const board1 = {
	id: 123221,
	lists: []
};

const board2 = {
	id: 443215475,
	lists: []
};

store.subscribe(() => console.log(store.getState()));

store.dispatch(addBoard(board1));

setTimeout(() => {
	console.log('board2');
	store.dispatch(addBoard(board2));
}, 2500);

// const jsx = <p>This is just for testing</p>;

// render(jsx, document.getElementById('app'));
