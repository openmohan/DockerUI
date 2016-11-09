import { combineReducers } from 'redux'
import {TEST,DOCKERPSCONST,DOCKERIMAGESCONST,DOCKERINFOCONST,DOCKERSERVICESCONST} from '../actions/actions'
import {getDockerProcess} from '../actions/actions'

function arithmetic(state={},action){
	switch(action.type){
		case TEST: return {
			test: action.data
		}
		default : return state
	}
}

function docker(state={},action){
	switch(action.type){
		case DOCKERPSCONST: return Object.assign({},state,{
			dockerps : action.data
		})
		case DOCKERIMAGESCONST: return Object.assign({},state,{
			dockerimages:action.data
		})
		case DOCKERINFOCONST : return Object.assign({},state,{
			dockerinfo:action.data
		})		
		case DOCKERSERVICESCONST : return Object.assign({},state,{
			dockerservices:action.data
		})
		default : return state
	}
}






const DockerManager = combineReducers({
	arithmetic,docker
})


export default DockerManager