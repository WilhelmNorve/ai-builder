# Build Plan

# Weather Dashboard Technical Plan

## Overview
Create a modern weather dashboard showing current weather for 5 locations: user's current location (via geolocation) plus Oslo, Bergen, Stavanger, and Trondheim. Single HTML file with embedded CSS and JavaScript.

## Layout Structure
- Header with app title "Norwegian Weather Dashboard"
- Grid layout with 5 weather cards (1 for current location + 4 Norwegian cities)
- Responsive design: 1 column on mobile, 2-3 columns on tablet, 5 columns on desktop
- Loading states for each card while fetching data

## Weather Card Design (Modern/Fancy)
- Glass morphism effect with backdrop-blur and semi-transparent background
- Gradient borders or subtle shadows
- Weather icons (use Unicode weather symbols or CSS-created icons)
- Card structure:
  - Location name at top
  - Large temperature display
  - Weather condition description
  - Additional info (feels like, humidity, wind speed)
  - Subtle animations on hover

## Data Requirements
**Geolocation Strategy:**
- Use browser geolocation API for user's location
- Fallback to Oslo coordinates (59.9139, 10.7522) if geolocation fails/denied
- Show "Current Location" or "Oslo (fallback)" as card title

**Hardcoded City Coordinates:**
- Oslo: lat 59.9139, lon 10.7522
- Bergen: lat 60.3913, lon 5.3221
- Trondheim: lat 63.4305, lon 10.3951
- Stavanger: lat 58.9700, lon 5.7331

**API Endpoint:**
Use Open-Meteo API for all weather data:
```
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&daily=weathercode&timezone=Europe%2FOslo
```

## Visual Design Elements
- Dark theme with gradient background (dark blue to purple)
- Modern typography (system fonts: -apple-system, BlinkMacSystemFont, Segoe UI)
- Color scheme: whites/light grays for text, accent colors for highlights
- Smooth transitions and subtle animations
- Weather condition icons using CSS or Unicode symbols
- Loading spinners with modern design

## JavaScript Functionality
- Fetch geolocation on page load
- Make 5 parallel API calls to Open-Meteo
- Parse weather data and populate cards
- Handle loading states (show skeleton/spinner while loading)
- Error handling: display user-friendly error messages on cards if API fails
- Weather code interpretation (Open-Meteo weather codes to descriptions)
- Temperature unit display (Celsius)

## Error Handling
- Geolocation denied/failed: fall back to Oslo coordinates
- API failures: show error message on affected card(s) with retry option
- Network errors: display "Unable to fetch weather data" with specific error details
- No silent failures - all errors visible to user

## Responsive Breakpoints
- Mobile (320px-768px): 1 column, stacked cards
- Tablet (768px-1024px): 2-3 columns
- Desktop (1024px+): 5 columns, horizontal layout

## Performance Considerations
- Lazy loading approach: load user location first, then cities
- Efficient API calls with minimal data requests
- CSS animations using transform/opacity for better performance
- Compress/optimize any large visual elements