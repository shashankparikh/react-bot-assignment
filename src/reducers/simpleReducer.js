const initialState = {
  FirstData: [],
  isLoading: true,
  messageData: [],
  messageLoader: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        ...state,
        FirstData: action.value,
        isLoading: false
      };

    case "MESSAGE_ID":
      console.log(action.value, "in reducer message data");
      return {
        ...state,
        messageData: [...action.value],
        messageLoader: false
      };
 
    default:
      return state;
  }
}
