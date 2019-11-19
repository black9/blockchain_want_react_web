import { createReducer } from '../../app/common/util/reducerUtil';

import {FETCH_BOARD} from './boardActions'

const initialState = {
    boardList: []
}


export default createReducer(initialState, {
  [FETCH_BOARD]: (state, payload)=>({
    ...state,
    boardList: payload
  }),

})


