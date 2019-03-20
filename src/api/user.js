import {
  performRequest
} from './index';

export const getQuestions = async (data) => {
  try {
    const response = await performRequest('get', 'v1/questions/', data, null);
    return response;
  } catch (e) {
    return e.response;
  }
}

export const getIndQuestions = async (data) => {
  const id = localStorage.getItem("id")
  try {
    const response = await performRequest('get', 'v1/questions/' + id, null);
    return response;
  } catch (e) {
    return e.response;
  }
}

export const getRoles = async (data) => {
  try {
    const response = await performRequest('get', 'v1/roles', data, null);

    return response;
  } catch (e) {
    return e.response;
  }
}

export const getMappings = async (data) => {
  try {
    const response = await performRequest('get', 'v1/mappings', data, null);

    return response;
  } catch (e) {
    return e.response;
  }
}




export const postQuestions = async (data) => {
  try {
    const response = await performRequest('post', 'v1/questions', data, null);

    return response;
  } catch (e) {
    return e.response;
  }

}

export const deleteQuestions = async (id, data) => {
  try {


    const response = await performRequest('delete', 'v1/questions/' + id, data, null);

    return response;
  } catch (e) {
    return e.response;
  }



}

export const editQuestions = async ( data) => {
  const id = localStorage.getItem("id")
  try {
    const response = await performRequest('patch', 'v1/questions/'+id , data, null);

    return response;
  } catch (e) {
    return e.response;
  }

}