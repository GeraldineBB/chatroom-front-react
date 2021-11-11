import { ADD_NEW_MESSAGE, CHANGE_VALUE_INPUT } from "../actions";


const initialState = {
  /* 
    ranger les messages initiaux dans le state
  */
  messages : ['un', 'deux', 'trois'], 
  valueInput: '', 
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      console.log('je dois ajouter un message');
      console.log(`action.messageInput: ${action.messageInput}`)
      return {...state,
        // messages: [action.messageInput]
      messages: [...state.messages, action.messageInput]
      }

    case CHANGE_VALUE_INPUT:
      console.log('je change la valeur de l\'input')
      return {...state, 
      valueInput: action.input
      }

    default:
      return state;
  }
}

export default reducer;
