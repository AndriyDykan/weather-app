import { useState, useEffect } from "react";
import useWeatherIcon from "../hooks/icons";

const API_KEY = "f501deca0894d22ee3c4e77ff2d5c2a0";
const CITY_URL = "http://api.openweathermap.org/geo/1.0/direct";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";
const FORCAST_URL = "https://api.openweathermap.org/data/2.5/forecast/daily?";

export function useCityFetch(city) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const clearSeach = () => setOptions([]);

  useEffect(() => {
    if (!city) {
      setOptions([]);
      return;
    }

    const fetchCity = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${CITY_URL}?q=${city}&limit=5&appid=${API_KEY}`
        );
        if (!response.ok) throw new Error("Failed to fetch city");
        const data = await response.json();
        const citys = data.map((element, index) => ({
          name: element.name,
          state: element.state,
          country: element.country,
          lat: element.lat,
          lon: element.lon,
        }));
        setOptions(citys);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCity();
  }, [city]);
  return { options, loading, error, clearSeach };
}

export function useWeatherFetch(selectedCity) {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedCity) {
      setWeather(null);
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${WEATHER_URL}lat=${selectedCity.lat}&lon=${selectedCity.lon}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) throw new Error("Failed to fetch weather");

        const data = await response.json();

        const formatted = {
          day: new Date(data.dt * 1000).toLocaleDateString("en-US", {
            weekday: "long",
          }),
          time: new Date(data.dt * 1000).toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: data.main.temp,
          feels_like: data.main.feels_like,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          wind_speed: data.wind.speed,
          name: data.name,
          visibility: data.visibility / 1000,
          weather_id: data.weather[0].id,
        };
        setWeather(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [selectedCity]);

  return { loading, weather, error };
}

export function useForcastFetch(selectedCity) {
  const [loading, setLoading] = useState(false);
  const [forcast, setForcast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedCity) {
      setForcast(null);
      return;
    }

    const fetchForcast = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${FORCAST_URL}lat=${selectedCity.lat}&lon=${selectedCity.lon}&cnt=16&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) throw new Error("Failed to fetch weather");

        const data = await response.json();

        const first11Days = data.list.slice(1, 8);
        const formatted = first11Days.map((item) => ({
          day: new Date(item.dt * 1000).toLocaleDateString("en-US", {
            weekday: "long",
          }),
          date: new Date(item.dt * 1000).toLocaleDateString("en-US"),
          temps: item.temp,
          feels_like: [
            item.feels_like.morn,
            item.feels_like.day,
            item.feels_like.eve,
            item.feels_like.night,
          ],
          weather: item.weather[0].description,
          weather_id: item.weather[0].id,
        }));

        setForcast(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForcast();
  }, [selectedCity]);

  return { loading, forcast, error };
}
