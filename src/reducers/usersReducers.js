// import { GET_USERS, ADD_USER } from "../actions/usersActions"

const usersInitialState = []

const usersReducers = ( state = usersInitialState, action ) => {
    switch(action.type){
        case 'SET_USERS' : {
            return [...action.payload]
        }
        case 'ADD_USER' : {
            return [...state , {...action.payload}]
        }
        case 'REJECT_USER' : {
            return state.map((user) => {
                if(user._id === action.payload._id ){
                    return { ...action.payload }
                }else {
                    return {...user}
                }
            })
        }
        case 'SHORTLIST_USER' : {
            return state.map((user) => {
                if(user._id === action.payload._id){
                    return {...action.payload}
                }else{
                    return {...user}
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default usersReducers