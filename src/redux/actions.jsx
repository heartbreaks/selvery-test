import {ADD_NEW_PARTICIPIANT} from './types'

export function addNewPerticipiant(participiantInfo){
    return {
        type: ADD_NEW_PARTICIPIANT,
        payload: participiantInfo
    }
}