import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducers from '../reducers/usersReducers'

const configureStore = () => {
    const store = createStore(combineReducers({
        users : usersReducers
    }),applyMiddleware(thunk))
    return store 
}

export default configureStore 