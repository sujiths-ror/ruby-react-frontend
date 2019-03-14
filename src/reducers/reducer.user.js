import { GET_QUESTIONS_SUCCEED,GET_QUESTIONS_FAILED,GET_ROLES_SUCCEED,GET_ROLES_FAILED,GET_MAPPINGS_SUCCEED,GET_MAPPINGS_FAILED } from '../ActionTypes';

const initialState = {
 
  question: [],
  roles : [],
  mappings:[],
}

export default (state = initialState, action) => {
  const { type, data } = action;
  switch(type) {
     case GET_QUESTIONS_SUCCEED:
    
       return { ...state, question: data.data.questions, errors: null };
      case GET_QUESTIONS_FAILED :
        return  { ...state, errors: data.message, question: false };
      case GET_ROLES_SUCCEED:
     
          return { ...state, roles: data.data.roles, errors: null };
      case GET_ROLES_FAILED :
           return  { ...state, errors: data.message, roles: false };
      
      case GET_MAPPINGS_SUCCEED:
           console.log("data",data)
          return { ...state, mappings: data.data.mappings, errors: null };
      case GET_MAPPINGS_FAILED :
          return  { ...state, errors: data.message, mappings: false };

      

    default:
      return state
  }
}


