# Weather App

A simple and elegant weather application built using React Native Expo. The app fetches real-time weather data using the OpenWeather API and provides a clean UI with dynamic weather conditions.

## Features

- Current weather updates
- Temperature, humidity, and wind speed details
- Weather condition icons
- State management with Zustand
- Styled with NativeWind

## Tech Stack

- React Native Expo
- Zustand (State Management)
- NativeWind (Tailwind CSS for React Native)
- OpenWeather API (Weather Data)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/bishalmoktan/mobile-weather-app.git
   cd weather-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

3. Create an `.env` file in the root directory and add your OpenWeather API key:

   ```env
   OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```sh
   expo start
   ```

## Usage

- Open the app on your device/emulator
- Allow location access to fetch weather data
- View real-time weather updates

## API Reference

- OpenWeather API: [https://openweathermap.org/api](https://openweathermap.org/api)
