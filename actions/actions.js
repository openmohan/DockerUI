import fetch from 'isomorphic-fetch'
// import fs from 'file-system'
export const TEST = "TEST"
export const DOCKERPSCONST = "DOCKERPS"
export const DOCKERIMAGESCONST = "DOCKERIMAGES"
export const DOCKERINFOCONST = "DOCKERINFO"
export const DOCKERSERVICESCONST = "DOCKERSERVICE"
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

export function DOCKERINFOACTION(json){
	return {
		type : DOCKERINFOCONST,
		data : json
	}
}

export function DOCKERSERVICEINFOACTION(json){
	return {
		type : DOCKERSERVICESCONST,
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
	return fetch(URL+'/getImages')
	.then(response=>{console.log(response);return response.json();}).then(json=>dispatch(DOCKERIMAGESACTION(json)))
	// return fetch(URL+'/getNames',{method:'GET',headers:{'Access-Control-Request-Headers': '*','Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(response=>response.json()).then(json=>dispatch(updateNames(json)))

	}
}
export function getDockerInfo(){
		return dispatch => {
	return fetch(URL+'/getInfo')
	.then(response=>{console.log(response);return response.json();}).then(json=>dispatch(DOCKERINFOACTION(json)))
}
}
export function getDockerServiceInfo(){
		return dispatch => {
	return fetch(URL+'/getSwarmService')
	.then(response=>{console.log(response);return response.json();}).then(json=>dispatch(DOCKERSERVICEINFOACTION(json)))
}
}