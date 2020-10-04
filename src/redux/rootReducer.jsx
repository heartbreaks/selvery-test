import initPercipiants from '../users.json'
import {ADD_NEW_PARTICIPIANT} from "./types";

let userList = JSON.stringify(initPercipiants)
userList = JSON.parse(userList)

userList.users.map(elem => {
    let splittedDate = elem.date.split('.')
    elem.date = new Date(splittedDate[2], splittedDate[1] - 1, splittedDate[0]).toLocaleDateString('ru-ru')
    return elem
})

export const rootReducer = (state = userList, action) => {
    switch (action.type) {
        case ADD_NEW_PARTICIPIANT:
            action.payload.date = new Date(action.payload.date).toLocaleDateString('ru-ru')
            return {...state, users: state.users.concat(action.payload)}
        default:
            return {...state}
    }
}