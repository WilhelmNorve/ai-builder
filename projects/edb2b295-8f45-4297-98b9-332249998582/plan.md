# Build Plan

# Weather Dashboard Technical Plan

## Project Overview
Create a modern weather dashboard displaying weather information for 5 locations: user's current location (via geolocation), Oslo, Bergen, Stavanger, and Trondheim. Single HTML file with embedded CSS and JavaScript.

## Data Sources
- **Weather API**: Open-Meteo API (https://api.open-meteo.com/v1/forecast)
- **Geolocation**: Browser's navigator.geolocation API for user location
- **Location coordinates** (hardcoded for Norwegian cities):
  - Oslo: 59.9139, 10.7522
  - Bergen: 60.3913, 5.3221
  - Stavanger: 58.9700, 5.7331
  - Trondheim: 63.4305, 10.3951

## API Endpoints
- Current weather: `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Europe/Oslo`
- Daily forecast: `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe/Oslo&forecast_days=7`

## UI Design Structure

### Layout
- **Header**: App title "Værmelding Norge" with gradient background
- **Main Grid**: 5-column responsive grid (mobile: single column, tablet: 2-3 columns)
- **Cards**: Modern glass-morphism cards for each location

### Card Components
Each weather card contains:
- Location name with icon
- Current temperature (large, prominent)
- Weather condition icon and description
- Additional metrics (humidity, wind speed)
- Mini 3-day forecast strip

### Design System
- **Color Scheme**: 
  - Primary: Blue gradient (#667eea to #764ba2)
  - Background: Light gray (#f7fafc)
  - Cards: White with subtle shadow and border-radius
- **Typography**: 
  - Font family: 'Segoe UI', system fonts
  - Hierarchy: 2rem for temp, 1.2rem for location, 0.9rem for details
- **Animations**: Hover effects, loading states, fade-in transitions

## Technical Implementation

### HTML Structure
```
- DOCTYPE html
- Head (meta tags, title, embedded CSS)
- Body
  - Header section
  - Main container
    - Loading spinner
    - Weather cards container (5 cards)
    - Error message container
  - Embedded JavaScript
```

### CSS Features
- CSS Grid and Flexbox for layout
- CSS custom properties for theming
- Responsive breakpoints (768px, 1024px)
- Glass-morphism effects (backdrop-filter, rgba backgrounds)
- Smooth transitions and hover animations
- Weather icon styling

### JavaScript Functionality

#### Core Functions
1. **getUserLocation()**: Get user's coordinates via geolocation API
2. **fetchWeatherData(lat, lon, locationName)**: Fetch weather from Open-Meteo
3. **createWeatherCard(data, location)**: Generate HTML for weather card
4. **updateWeatherCards()**: Orchestrate all API calls and UI updates
5. **getWeatherIcon(code)**: Map weather codes to emoji/icons

#### Weather Code Mapping
Map Open-Meteo weather codes to appropriate icons:
- Clear sky (0): ☀️
- Partly cloudy (1-3): ⛅
- Rain (61-67): 🌧️
- Snow (71-77): ❄️
- Thunderstorm (95-99): ⛈️

#### Error Handling
- Geolocation permission denied: Show generic location or use Oslo as fallback
- API failures: Display error message with retry button
- Network issues: Show offline indicator

#### Loading States
- Initial spinner while fetching all data
- Skeleton cards during loading
- Progressive loading (show data as it arrives)

## Responsive Behavior
- **Desktop (1024px+)**: 5-column grid
- **Tablet (768px-1023px)**: 2-3 column grid
- **Mobile (<768px)**: Single column, cards stack vertically
- Touch-friendly button sizes (44px minimum)

## Performance Considerations
- Parallel API calls for all locations
- Cache weather data for 10 minutes to avoid redundant calls
- Lazy load weather icons
- Minimize DOM manipulation

## Accessibility
- Semantic HTML structure
- Alt text for weather icons
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios

## Browser Compatibility
- Modern browsers (ES6+ support required)
- Fallback for browsers without geolocation
- Graceful degradation for older CSS features