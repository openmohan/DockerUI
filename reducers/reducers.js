import { combineReducers } from 'redux'
import {TEST,DOCKERPSCONST} from '../actions/actions'

function arithmetic(state=[],action){
	switch(action.type){
		case TEST: console.log("called"); return {
			test: action.data
		}
		default : return state
	}
}

function docker(state=[],action){
	switch(action.type){
		case DOCKERPSCONST: return {
			dockerps : action.data
		}
		default : return state
	}
}






const DockerManager = combineReducers({
	arithmetic,docker
})


export default DockerManager