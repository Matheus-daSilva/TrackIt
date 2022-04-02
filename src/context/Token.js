import { React, createContext, useContext, useState} from 'react';

const TokenContext = createContext();

export default function TokenProvider({ children }){
    const [token, setToken] = useState(null);

    return (
        <TokenContext.Provider value={{token, setToken}}>
            {children}
        </TokenContext.Provider>
    )
}

export function useToken() {
   const context = useContext(TokenContext);
   const { token, setToken } = context;
   return { token, setToken }
}