# Build Plan

# Weather App Technical Plan

## Overview
Create a single-page weather application that shows current weather for the user's location with buttons to switch between Norway's 4 largest cities.

## Core Features
1. **Automatic Location Detection**: Use browser geolocation API with Oslo fallback
2. **City Switching**: Buttons for Oslo, Bergen, Trondheim, and Stavanger
3. **Weather Display**: Current temperature, conditions, and weather icon
4. **Error Handling**: User-friendly error messages for API failures

## Technical Implementation

### HTML Structure
- Header with app title
- Location display section
- Weather information card (temperature, description, icon)
- City selection buttons row
- Error message container (initially hidden)

### CSS Styling
- Modern, clean design with card-based layout
- Responsive design for mobile and desktop
- Weather icons using Unicode symbols or CSS-created icons
- Button styling with hover effects
- Color scheme: Light blue/white theme matching weather theme
- Smooth transitions for data updates

### JavaScript Functionality

#### 1. Hardcoded City Coordinates
```
Oslo: lat 59.9139, lon 10.7522
Bergen: lat 60.3913, lon 5.3221  
Trondheim: lat 63.4305, lon 10.3951
Stavanger: lat 58.9700, lon 5.7331
```

#### 2. Geolocation Logic
- Try browser geolocation API first
- If denied/failed, fallback to Oslo coordinates (59.9139, 10.7522)
- Show loading state during geolocation request

#### 3. Weather API Integration
- **API**: Open-Meteo (no key required)
- **Endpoint**: `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true&hourly=temperature_2m,weathercode&timezone=Europe%2FOslo`
- **Data needed**: Current temperature, weather code, wind speed
- **Weather codes**: Map numeric codes to descriptions (0=clear, 1-3=partly cloudy, etc.)

#### 4. Core Functions
- `getCurrentLocation()`: Get user location or use Oslo fallback
- `fetchWeather(lat, lon, cityName)`: Call Open-Meteo API
- `displayWeather(data, location)`: Update UI with weather data
- `getWeatherIcon(weatherCode)`: Map weather codes to Unicode icons
- `handleError(message)`: Show error in UI
- `switchToCity(cityName)`: Handle city button clicks

#### 5. Event Handlers
- City button clicks to switch locations
- Initial page load to get current location
- Error handling for network failures

#### 6. Error Handling
- Network request failures: "Weather API failed: [error details]"
- Geolocation denied: "Location access denied, showing Oslo weather"
- Invalid API response: "Unable to load weather data"
- Display errors prominently in red text container

#### 7. Loading States
- Show "Loading weather..." during API calls
- Disable city buttons during requests
- Replace with weather data when loaded

## Weather Code Mapping
Map Open-Meteo weather codes to descriptions and icons:
- 0: Clear sky (☀️)
- 1-3: Partly cloudy (⛅)
- 45,48: Fog (🌫️)
- 51-57: Drizzle (🌦️)
- 61-67: Rain (🌧️)
- 71-77: Snow (🌨️)
- 80-82: Rain showers (🌦️)
- 95-99: Thunderstorm (⛈️)

## Data Flow
1. Page loads → Try geolocation → Fallback to Oslo if needed
2. Get coordinates → Call Open-Meteo API
3. Parse weather data → Update UI with temperature, conditions, location
4. User clicks city button → Get city coordinates → Repeat API call
5. Handle any errors → Display user-friendly error messages

## UI Layout
- Header: "Norwegian Weather"
- Current location display: "Weather for [City Name]"
- Weather card: Large temperature, condition text, weather icon
- Button row: Four city buttons (Oslo, Bergen, Trondheim, Stavanger)
- Footer: Error message area (hidden by default)