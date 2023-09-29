import {createContext, useReducer} from "react";
import DarkModeReducer from "./darkModeReduce";
const INITIAL_STATE = {
    darkMode: false,
}
export const DarkModeContext = createContext({
    state: INITIAL_STATE,
    dispatch: () => {}, 
  });

export const DarkModeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
    return(
        <DarkModeContext.Provider value={{darkMode: state.darkMode, dispatch }}>
           {children}
        </DarkModeContext.Provider>
    ) 
}