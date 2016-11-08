import fetch from 'isomorphic-fetch'
// import fs from 'file-system'
export const TEST = "TEST"
export const DOCKERPSCONST = "DOCKERPS"
export const DOCKERIMAGESCONST = "DOCKERIMAGES"

 const URL = "http://localhost:8085"
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
	return fetch(URL+'/getContainers')
	.then(response=>{console.log(response);return response.json();}).then(json=>dispatch(DOCKERPSACTION(json)))
}

}

export function getDockerImages(){
		return dispatch => {
	return fetch(URL+'/getInfo',{method:'GET',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}})
	.then(response=>{console.log(response);return response.json();}).then(json=>dispatch(DOCKERIMAGESACTION(json)))
	// return fetch(URL+'/getNames',{method:'GET',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(response=>response.json()).then(json=>dispatch(updateNames(json)))

}

}