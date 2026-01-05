import { createContext, useContext, useState } from "react";

// step 1 create a context
const MyContext = createContext()



// as a function treat hoga  step 2 : provide a context
const MyContextProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    const value = {
        count,
        setCount
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
}



// as a hook treat hoga  step 3 use context
const useMyContext = () => {
    return useContext(MyContext)
}

export { MyContextProvider, useMyContext }