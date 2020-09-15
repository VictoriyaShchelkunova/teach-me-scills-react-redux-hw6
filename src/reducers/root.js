const initialAState = {
    value: '', 
    length: 0,
    warningStatus: false,  
    
}

export const rootReducer = (state = initialAState, action) => {
    switch (action.type) {
        case 'SAVE_VALUE':
            debugger
            return {
                ...state,
                value: action.payload,
                length: action.payload.length,
                warningStatus: action.payload.length < state.length ? true : false,
                
            }
                
        default:
            break;
    }
    return state;
}