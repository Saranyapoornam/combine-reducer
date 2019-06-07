const intialState ={
    b :1
}
const ReducerB = (state = intialState,action) =>{
    if(action.type === 'UPDATE_B'){
        return{
            ...state,
            b : state.b + action.a
        }
    }
    return state
}

export default ReducerB