import React,{useState, createContext} from "react";

export const CityContext = createContext();
export function CityProvider({children}){
    const [selectedCity,setSelectedCity] = useState(null);

    return(
        <CityContext.Provider value={{selectedCity,setSelectedCity}}>
            {children}
        </CityContext.Provider>
    )
}