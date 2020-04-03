import {DO_CONSTANT} from './constants'

const addToDo = addValue => ({
    type: DO_CONSTANT.ADD_TO_DO,
    addValue,
})
const removeToDo = idValue => ({
    type: DO_CONSTANT.REMOVE_TO_DO,
    idValue
})
const updateToDo = updateValue => ({
    type: DO_CONSTANT.UPDATE_TO_DO,
    updateValue
})
export const DoActions = {
    addToDo,
    removeToDo,
    updateToDo,
}