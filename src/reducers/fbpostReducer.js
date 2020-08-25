const intialState =[];


const fbpostReducer = (state = intialState, action) => {
    switch (action.type) {
      case "POST":
        return [...state,action.item];
        
      default:
        return state;
    }
  };
  
  export default fbpostReducer;