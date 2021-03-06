import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger' // add `redux-logger` import
import cartReducer from './reducers/cartReducer'
import authReducer from './reducers/authReducer'
import modalReducer from './reducers/modalReducer'
import uiReducer from './reducers/uiReducer'

export const rootReducer = combineReducers({
    cartReducer: cartReducer,
    authReducer: authReducer,
    modalReducer:modalReducer,
    uiReducer:uiReducer

  })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk), applyMiddleware(logger))
)

export default store