const initState={
    inputValue:'',
    list:[1,2,3]
}
export  default (state = initState,action)=>{
    const  newState = JSON.parse(JSON.stringify(state));
    switch (action.type){
        case 'CHANGE_INPUT_VALUE':
            newState.inputValue=action.value;
            return newState;
        case 'ADD_LIST':
            newState.list.push(action.value);
            // 清空input里面的值
            newState.inputValue='';
            return newState
        case 'DELETE_LIST_ITEM':
            newState.list.splice(action.index,1)
            return newState
    }
    return state;
}