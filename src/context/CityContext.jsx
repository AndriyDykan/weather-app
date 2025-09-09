import React, { useState, createContext } from "react";
import { useWeatherFetch, useForcastFetch } from "../hooks/weatherFetch";

export const CityContext = createContext();
export function CityProvider({ children }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const { weather } = useWeatherFetch(selectedCity);
  const { forcast } = useForcastFetch(selectedCity);

  return (
    <CityContext.Provider value={{weather,forcast, selectedCity, setSelectedCity }}>
      {children}
    </CityContext.Provider>
  );
}
