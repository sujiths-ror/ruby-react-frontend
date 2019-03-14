 import { call, put, takeLatest } from 'redux-saga/effects';
 import {  GET_QUESTIONS,GET_QUESTIONS_SUCCEED,GET_QUESTIONS_FAILED ,POST_QUESTIONS,POST_QUESTIONS_FAILED,POST_QUESTIONS_SUCCEED,GET_ROLES,GET_ROLES_SUCCEED,GET_ROLES_FAILED,GET_MAPPINGS_SUCCEED,GET_MAPPINGS_FAILED, GET_MAPPINGS,DELETE_QUESTIONS_FAILED,DELETE_QUESTIONS_SUCCEED,DELETE_QUESTIONS,EDIT_QUESTIONS,EDIT_QUESTIONS_SUCCEED,EDIT_QUESTIONS_FAILED} from '../ActionTypes';
import { getQuestions,postQuestions,getRoles,getMappings,deleteQuestions,editQuestions } from '../api/user';



const getQuestionsData= function* (action) {
  try {
     const response = yield call(getQuestions, action.data);
     const data = response.data;
     
     if(response.statusText === "OK") {
       yield put({type: GET_QUESTIONS_SUCCEED, data});
     }
     else
       yield put({type: GET_QUESTIONS_FAILED, data});
  } catch (e) {
     yield put({type: GET_QUESTIONS_FAILED, message: e.message});
  }
}

const getRolesData= function* (action) {
  try {
     const response = yield call(getRoles, action.data);
     const data = response.data;
     
     if(response.statusText === "OK") {
       yield put({type: GET_ROLES_SUCCEED, data});
     }
     else
       yield put({type: GET_ROLES_FAILED, data});
  } catch (e) {
     yield put({type: GET_ROLES_FAILED, message: e.message});
  }
}

const getMappingsData= function* (action) {
  try {
     const response = yield call(getMappings, action.data);
     const data = response.data;
     
     if(response.statusText === "OK") {
       yield put({type: GET_MAPPINGS_SUCCEED, data});
     }
     else
       yield put({type: GET_MAPPINGS_FAILED, data});
  } catch (e) {
     yield put({type: GET_MAPPINGS_FAILED, message: e.message});
  }
}

const postQuestionsData = function* (action){
  try {
    const response = yield call(postQuestions, action.data);
    const data = response.data;
    console.log("MMMMMMMMMMMM",data)
    if(response.statusText === "OK") {
      yield put({type: POST_QUESTIONS_SUCCEED, data});
    }
    else
      yield put({type: POST_QUESTIONS_FAILED, data});
 } catch (e) {
    yield put({type: POST_QUESTIONS_FAILED, message: e.message});
 }
}

const deleteQuestionsData = function* (action){
  try {
    const response = yield call(deleteQuestions, action.data);
    const data = response.data;
    console.log("MMMMMMMMMMMM",data)
    if(response.statusText === "Not Acceptable") {
      yield put({type: DELETE_QUESTIONS_SUCCEED, data});
    }
    else
      yield put({type: DELETE_QUESTIONS_FAILED, data});
 } catch (e) {
    yield put({type: DELETE_QUESTIONS_FAILED, message: e.message});
 }
}

const editQuestionsData = function* (action){

  try {
    const response = yield call(editQuestions, action.data);
    const data = response.data;
    console.log("MMMMMMMMMMMM",data)
    if(response.statusText === "OK") {
      yield put({type: EDIT_QUESTIONS_SUCCEED, data});
    }
    else
      yield put({type: EDIT_QUESTIONS_FAILED, data});
 } catch (e) {
    yield put({type: EDIT_QUESTIONS_FAILED, message: e.message});
 }





}




 export const userSaga = [
  
   takeLatest(GET_QUESTIONS, getQuestionsData),
   takeLatest(GET_ROLES,getRolesData),
   takeLatest(GET_MAPPINGS,getMappingsData),
   takeLatest(POST_QUESTIONS,postQuestionsData),
   takeLatest(DELETE_QUESTIONS,deleteQuestionsData),
   takeLatest(EDIT_QUESTIONS,editQuestionsData)
 ]