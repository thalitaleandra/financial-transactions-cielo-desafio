const DarkModeReducer = (state: { darkMode: boolean }, action: { type: string }) => {
    switch (action.type) {
        case 'LIGTH':{
        return {
            darkMode: false
        }
       }
        case 'DARK': {
            return {
                darkMode: true
            }
        }
        case 'TOGGLE':{
            return {
                darkMode: !state.darkMode
            }
        }
        default: 
        return state;
   }
}
export default DarkModeReducer;