# Build Plan

# World Clock with Fun Facts

## File Structure
- Single `index.html` file

## HTML Structure
- `.container` - main wrapper
- `.hero-section` - banner with background image
- `.clocks-grid` - 3-column layout for clocks
- `.clock-card` - individual clock container
- `.clock-display` - digital time display
- `.timezone-label` - city/timezone name
- `.fun-fact` - fact text below each clock

## CSS Classes
- `.container` - max-width wrapper with padding
- `.hero-section` - gradient background, centered text
- `.clocks-grid` - CSS grid, 3 columns, responsive
- `.clock-card` - card styling with shadow, rounded corners
- `.clock-display` - large digital time font
- `.timezone-label` - city name styling
- `.fun-fact` - smaller text, different color
- `.time-number` - animated digit styling
- Media queries for mobile responsiveness

## JavaScript Functions
- `updateClocks()` - main function to update all three clocks
- `formatTime(date, timezone)` - format time for specific timezone
- `getFunFact(city)` - return fun fact for each city
- `startClock()` - initialize and start interval
- `animateTimeChange()` - smooth number transitions

## Time Zones
- **New York (EST/EDT)**: America/New_York
  - Fun fact: "New York City has over 8.3 million people and never truly sleeps!"
- **Tokyo (JST)**: Asia/Tokyo  
  - Fun fact: "Tokyo is home to the world's busiest train station - Shinjuku!"
- **Oslo (CET/CEST)**: Europe/Oslo
  - Fun fact: "Oslo is surrounded by forests and has 40 islands within city limits!"

## Visual Design
- Hero banner with clock/time theme image: `https://picsum.photos/seed/clocktower/1200/400`
- Dark theme with blue/purple gradients
- Card thumbnails: `https://picsum.photos/seed/newyork/300/150` (vary seed per city)
- Glowing text effects for time displays
- Smooth CSS transitions on hover
- Box shadows and rounded corners

## API Endpoints
None needed - using JavaScript's built-in `Intl.DateTimeFormat` and `Date` objects for timezone conversion.

## Key Features
- Real-time updates every second
- Smooth digit animations
- Responsive grid layout
- Auto-detects daylight saving time
- Fun facts display below each clock
- Modern card-based design