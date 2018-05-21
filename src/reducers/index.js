import {SELECT_TYPE} from '../actions';

export default function reducer(state = [], action) {
	switch(action.type) {
		case SELECT_TYPE:
			
			return [];

		default:
			return state;
	}
}