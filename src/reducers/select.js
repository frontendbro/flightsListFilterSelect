import {handleActions} from 'redux-actions';
import {setType} from '../actions/select';
import data from '../data';

const initialState = {
    selectType: "all",
    data
};

export default handleActions(
    {
        [setType]: (state, action) => ({...state, selectType: action.payload})
    },
    initialState
);

export const getCurrentType = state => state.select.selectType;
export const getData = state => state.select.data;