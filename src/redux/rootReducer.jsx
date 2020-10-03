import initPercipiants from '../users.json'
import {ADD_NEW_PARTICIPIANT} from "./types";

let userList = JSON.stringify(initPercipiants)
userList = JSON.parse(userList)

export const rootReducer = (state = userList, action) => {
    switch (action.type) {
        case ADD_NEW_PARTICIPIANT:
            return {...state, users: state.users.concat(action.payload)}
        default:
            return {...state}
    }
}