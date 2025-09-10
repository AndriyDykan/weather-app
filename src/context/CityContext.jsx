import React, { useState, createContext } from "react";
import { useWeatherFetch, useForcastFetch, useHourlyFetch } from "../hooks/weatherFetch";

export const CityContext = createContext();
export function CityProvider({ children }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const { weather } = useWeatherFetch(selectedCity);
  const { forcast } = useForcastFetch(selectedCity);
  const {hourly} = useHourlyFetch(selectedCity);

  return (
    <CityContext.Provider value={{hourly,weather,forcast, selectedCity, setSelectedCity }}>
      {children}
    </CityContext.Provider>
  );
}
