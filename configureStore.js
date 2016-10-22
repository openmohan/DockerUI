import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers/reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedstate){
	return createStore(
			rootReducer,
			preloadedstate,
			applyMiddleware(
					thunkMiddleware,
					loggerMiddleware
				)
		)
}

export const store= applyMiddleware(
					thunkMiddleware,
					loggerMiddleware
				)(createStore)(rootReducer);
