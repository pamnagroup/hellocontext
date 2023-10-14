import {createContext, useContext, useReducer} from "react";

const ShomarandehContext = createContext(null);

const initializeState = {
    currentValue : 10
}

const reducer = (state, action)=>{

    switch (action.type){
        case "AFZAYESH":
            state = {...state, currentValue: state.currentValue+1}
            break;
        case "KAHESH":
            state = {...state, currentValue: state.currentValue-1}
            break;
        case "SABET":
            state = {...state, currentValue: action.value}
            break;

        default: throw Error(`An unknown Action to Shomarandeh Reducer ${action.type}`);
    }

    return state;
}

const ShomarandehProvider=({children})=>{
    let [state, dispatch] = useReducer(reducer, initializeState, ()=>initializeState);

    return(
        <ShomarandehContext.Provider value={{state, dispatch}}>
            {children}
        </ShomarandehContext.Provider>
    )
}

const useShomarandeh=()=>{
    let context = useContext(ShomarandehContext);
    if (!context){
        throw Error("useShomarandeh should be used inside ShomarandehProvider");
    }
    let {state, dispatch} = context;
    return {state, dispatch}
}

export {ShomarandehProvider, useShomarandeh}
