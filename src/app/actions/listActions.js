import * as types from './actionTypes';

export  function loadList(data){
	console.log('in action',data);
	return {type : types.LOAD_LIST_SUCCESS, data}
}