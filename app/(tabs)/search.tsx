import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Search as SearchIcon, Wind, Droplets, Sun } from "lucide-react-native";
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

export default function SearchScreen() {
  const { query, data, error, loading, setQuery, fetchWeatherData } =
    useWeatherStore();

  const handleSearch = () => {
    if (query.trim()) {
      fetchWeatherData(query);
    }
    setQuery("");
  };

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
        style={{
          flex: 1,
          padding: 20,
          minHeight: "100%",
        }}
      >
        <StatusBar style="light" />
        <View className="flex-row mt-20 mb-5 gap-2">
          <TextInput
            className="flex-1 bg-blue-500/50 rounded-lg text-white h-14  px-3 text-xl"
            placeholder="Enter city name"
            placeholderTextColor="#94a3b8"
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity
            className="bg-blue-500/50 rounded-lg p-3 justify-center items-center"
            onPress={handleSearch}
          >
            <SearchIcon size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {error && (
          <Text className="text-base text-center mt-10 text-red-500">
            {error}
          </Text>
        )}

        <View className="mt-5">{data && <WeatherCard data={data} />}</View>
      </LinearGradient>
    </ScrollView>
  );
}
