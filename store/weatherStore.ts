import { create } from "zustand";
import axios from "axios";
import { ILocation, WeatherData } from "@/types/weather";

const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
  query: string;
  location: ILocation;
  fetchWeatherData: (query?: string, location?: ILocation) => Promise<void>;
  setQuery: (query: string) => void;
  setLocation: (location: ILocation) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  data: null,
  loading: false,
  error: null,
  query: "",
  location: {
    lat: 27.7103,
    lon: 85.3222,
  },

  fetchWeatherData: async (query?: string, location?: ILocation) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get<WeatherData>(`${BASE_URL}`, {
        params: {
          q: query,
          lat: location?.lat || 27.7103,
          lon: location?.lon || 85.3222,
          appid: API_KEY,
          units: "metric",
        },
      });

      set({ data: response.data, loading: false });
    } catch (error) {
      console.log(error);
      set({ error: "Failed to get weather data", loading: false });
    }
  },
  setQuery: (query: string) => set({ query }),
  setLocation: (location: ILocation) => set({ location }),
}));
