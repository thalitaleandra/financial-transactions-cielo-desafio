import {createContext, useReducer, ReactNode, Dispatch} from "react";
import DarkModeReducer from "./darkModeReduce";
const INITIAL_STATE = {
    darkMode: false,
}
export type DarkModeAction = { type: 'TOGGLE' } | { type: 'LIGHT' } | { type: 'DARK' };

interface DarkModeContextProps {
  darkMode: boolean;
  dispatch: Dispatch<DarkModeAction>;
}
interface DarkModeProviderProps {
    children: ReactNode;
  }

export const DarkModeContext = createContext<DarkModeContextProps>({
    darkMode: INITIAL_STATE.darkMode,
    dispatch: () => {},
  });

export const DarkModeContextProvider = ({children}:DarkModeProviderProps ) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
    return(
        <DarkModeContext.Provider value={{darkMode: state.darkMode, dispatch }}>
           {children}
        </DarkModeContext.Provider>
    ) 
}