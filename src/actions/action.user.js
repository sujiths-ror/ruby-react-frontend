import { GET_QUESTIONS,POST_QUESTIONS,GET_ROLES,GET_MAPPINGS, DELETE_QUESTIONS, EDIT_QUESTIONS} from '../ActionTypes';



export const getQuestions =() =>{

  return{
  type:GET_QUESTIONS
}
}

export const getRoles =() =>{

  return{
  type:GET_ROLES
}
}

export const getMappings =() =>{

  return{
  type:GET_MAPPINGS
}
}

export const postQuestions = (data) => {
  return{
    type:POST_QUESTIONS,
    data
    
  }
}

export const deleteQuestions = (data) => {
  return {
    type:DELETE_QUESTIONS,
    data
  }
}

export const editQuestions = (data) =>{
  return{
    type:EDIT_QUESTIONS,
    data
  }
}