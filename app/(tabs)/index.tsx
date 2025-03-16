import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Wind, Droplets, Sun, CloudRain } from "lucide-react-native";
import { useWeatherStore } from "@/store/weatherStore";
import { getWeatherIcon } from "@/lib/utils";
import WeatherCard from "@/components/WeatherCard";

const API_KEY = "14d276f3fe8d93a33f9e184939be6537";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}
// https://openweathermap.org/img/wn/03d.png

export default function WeatherScreen() {
  const { data, setLocation, loading, error, fetchWeatherData } =
    useWeatherStore();
  useEffect(() => {
    fetchWeatherData();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
    })();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl text-red-500 text-center">{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-[#1a1b1e]">
      <LinearGradient
        colors={["#1e40af", "#3b82f6", "#60a5fa"]}
        style={{ flex: 1, minHeight: "100%", padding: 20 }}
      >
        <StatusBar style="light" />
        <View className="mt-20">{data && <WeatherCard data={data} />}</View>
      </LinearGradient>
    </ScrollView>
  );
}
