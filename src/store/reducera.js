const intialState ={
    a :1
}
const ReducerA = (state = intialState,action) =>{
    if(action.type === 'UPDATE_A'){
        return{
            ...state,
            a : state.a + action.b
        }
    }
    return state
}

export default ReducerA