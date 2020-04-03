import {INITIAL_STATE} from './States'
import {DO_CONSTANT} from './constants'

const addToDoList = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type){
        case DO_CONSTANT.ADD_TO_DO:
            // let currentList = [...state.toDoList];
            let todo = Object.assign({}, action.addValue)
            // console.log('todo',todo, currentList.push(todo))
            return {
                ...state, 
                toDoList: [...state.toDoList, todo]
            }
        case DO_CONSTANT.REMOVE_TO_DO:
            let currentList = [...state.toDoList];
            let newList = currentList.filter(item => item.id !== action.idValue)
            console.log('newlist', newList, currentList)
            if(newList){
                return {
                    ...state,
                    toDoList: newList
                }
            }
            else{
                return state
            }
        case DO_CONSTANT.UPDATE_TO_DO:
            let currentDoList = [...state.toDoList];
            let removeSame = currentDoList.filter(item => item.id !== action.updateValue.id);
            let newUpdateList = [...removeSame, action.updateValue]
            let neeSortUpdate = newUpdateList.sort((a,b) => a.id - b. id)
           return {
               ...state,
               toDoList: neeSortUpdate
           }
        default: 
            return state
    }
}
export const DoReducers = {
    addToDoList
}