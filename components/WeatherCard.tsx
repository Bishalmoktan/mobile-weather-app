import { View, Text, Image } from "react-native";
import React from "react";
import { WeatherData } from "@/types/weather";
import { getWeatherIcon } from "@/lib/utils";
import { Droplets, Sun, Wind } from "lucide-react-native";

const WeatherCard = ({ data }: { data: WeatherData }) => {
  return (
    <View className="items-center">
      <Text className="text-4xl text-white font-bold text-center">
        {data.name}
      </Text>
      <Text className="text-7xl text-white font-bold my-2">
        {Math.round(data.main.temp)}°C
      </Text>
      <Image
        source={{ uri: getWeatherIcon(data.weather[0].icon) }}
        style={{
          height: 200,
          width: 200,
          resizeMode: "cover",
        }}
      />
      <Text className="text-2xl text-white font-semibold">
        {data?.weather[0].main}
      </Text>
      <Text className="text-lg text-white font-semibold mb-5">
        {data &&
          data.weather[0].description.charAt(0).toUpperCase() +
            data.weather[0].description.slice(1)}
      </Text>

      <View className="flex-row gap-2 justify-between flex-wrap mt-5">
        <View className="bg-white/20 rounded-xl p-5 items-center w-[30%] mb-5">
          <Wind size={24} color="#fff" />
          <Text className="text-white text-sm font-medium mt-2">
            Wind Speed
          </Text>
          <Text className="text-white text-lg font-semibold mt-1">
            {data?.wind.speed} m/s
          </Text>
        </View>

        <View className="bg-white/20 rounded-xl p-5 items-center w-[30%] mb-5">
          <Droplets size={24} color="#fff" />
          <Text className="text-white text-sm font-medium mt-2">
            {data?.main.humidity}
          </Text>
          <Text className="text-white text-lg font-semibold mt-1">100%</Text>
        </View>

        <View className="bg-white/20 rounded-xl p-5 items-center w-[30%] mb-5">
          <Sun size={24} color="#fff" />
          <Text className="text-white text-sm font-medium mt-2">
            Feels Like
          </Text>
          <Text className="text-white text-lg font-semibold mt-1">
            {data?.main.feels_like}°C
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherCard;
