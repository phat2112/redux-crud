import {combineReducers} from 'redux'
import {DoReducers} from '../ListDo/Reducers'

const rootReducer = combineReducers({
    ToDo: DoReducers.addToDoList,
})
export default rootReducer