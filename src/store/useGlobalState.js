import { useReducer } from "react";
import storage from "local-storage-fallback";

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            //setting local storage so that it'll save that state even with refresh
            storage.setItem("isDark", !state.isDark)
            //if something is sending a dispatch for TOGGLE_DARK_MODE, we'll want to change the state of isDark
            return {
                isDark: !state.isDark,
            };
        default: {
            return state;
        }
    }
}

const useGlobalState = () => {
    const [state, dispatch] = useReducer(reducer, {
        isDark: storage.getItem("isDark") ? JSON.parse(storage.getItem("isDark")) : false,
    })

    return { state, dispatch };
}

export default useGlobalState;