import fetch from 'isomorphic-fetch'
// import fs from 'file-system'
export const TEST = "TEST"
export const DOCKERPSCONST = "DOCKERPS"
export const DOCKERIMAGESCONST = "DOCKERIMAGES"

 const URL = "http://10.203.63.242:2375/api"
/*
import docker from 'docker-remote-api'
var request = docker({
 // host: '/var/run/docker.sock'
 host : 'http://10.203.63.242:2375'
})
*/

export function test(){
	return {
		type:TEST,
		data:"23"
	}
}

export function DOCKERPSACTION(json){
	return {
		type : DOCKERPSCONST,
		data : json
	}
}

export function DOCKERIMAGESACTION(json){
	return {
		type : DOCKERIMAGESCONST,
		data : json
	}
}

export function getDockerProcess(){
		return dispatch => {
	return fetch('/api/containers/json',{method:'GET',mode:'no-cors','Access-Control-Allow-Origin': '*','Access-Control-Request-Headers': '*','Content-Type' : 'Application/json; charset=UTF-8'})
	.then(response=>response.json()).then(json=>dispatch(DOCKERPSACTION(json)))
}

}

export function getDockerImages(){
		return dispatch => {
	return fetch('/api/images/json',{method:'GET',mode:'no-cors','Access-Control-Allow-Origin': '*','Access-Control-Request-Headers': '*','Content-Type' : 'Application/json; charset=UTF-8'})
	.then(response=>response.json()).then(json=>dispatch(DOCKERIMAGESACTION(json)))
}

}