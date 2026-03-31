# Build Plan

# Technical Plan: World Clock with 3 Time Zones

## Overview
Create a single HTML file with 3 analog clocks showing different time zones, each with location descriptions and fun facts.

## Visual Design
- **Theme**: Dark modern design with gradient background
- **Hero Section**: Large banner with world map background image from `https://picsum.photos/seed/worldmap/1200/400`
- **Layout**: Three-column grid layout for desktop, stacked for mobile
- **Colors**: Dark blue/purple gradient background, white/gold accents
- **Typography**: Modern sans-serif fonts with good contrast

## Structure

### HTML Elements
- Header with hero banner and title "World Time Zones"
- Main container with 3 clock sections
- Each clock section contains:
  - Clock canvas element (200x200px)
  - Location name and description
  - Fun fact card with background image
- Footer with current user location info

### Clock Locations & Coordinates
1. **New York, USA** (Eastern Time)
   - Timezone: America/New_York
   - Coordinates: 40.7128, -74.0060
   - Image: `https://picsum.photos/seed/newyork/300/200`

2. **Tokyo, Japan** (Japan Standard Time)
   - Timezone: Asia/Tokyo
   - Coordinates: 35.6762, 139.6503
   - Image: `https://picsum.photos/seed/tokyo/300/200`

3. **Sydney, Australia** (Australian Eastern Time)
   - Timezone: Australia/Sydney
   - Coordinates: -33.8688, 151.2093
   - Image: `https://picsum.photos/seed/sydney/300/200`

## JavaScript Functionality

### Core Features
- Real-time analog clocks using HTML5 Canvas
- Clock faces with hour markers, numbers, and hands
- Update every second for smooth second hand movement
- Responsive canvas sizing

### Time Zone Implementation
- Use JavaScript `Intl.DateTimeFormat` for accurate timezone conversion
- Calculate hours, minutes, seconds for each timezone
- Draw analog clock hands with proper angles:
  - Hour hand: (hours % 12) * 30 + minutes * 0.5 degrees
  - Minute hand: minutes * 6 + seconds * 0.1 degrees
  - Second hand: seconds * 6 degrees

### Clock Drawing Logic
- Clear canvas and redraw every second
- Draw clock face circle with gradient
- Add hour markers (12 lines) and numbers (1-12)
- Draw three hands with different styles:
  - Hour hand: thick, short, black
  - Minute hand: medium, longer, black  
  - Second hand: thin, longest, red with smooth animation

## Content Data

### Location Descriptions & Fun Facts

**New York, USA**
- Description: "The Big Apple - America's largest city and global financial hub"
- Fun Fact: "New York City has over 8.3 million people but fits into an area smaller than Tokyo. The Statue of Liberty was originally copper-colored and turned green due to oxidation over 30 years!"

**Tokyo, Japan**  
- Description: "The world's largest metropolitan area with cutting-edge technology"
- Fun Fact: "Tokyo has more Michelin-starred restaurants than Paris and London combined! The city also has themed cafés for everything - from cats and owls to robots and ninjas."

**Sydney, Australia**
- Description: "Australia's harbor city famous for its iconic Opera House and bridge"
- Fun Fact: "Sydney Harbour Bridge is nicknamed 'The Coathanger' and you can climb to its summit! The city is also home to the world's largest natural harbor and some of the most venomous spiders."

## CSS Styling Requirements

### Layout & Responsive Design
- CSS Grid for main clock container (3 columns desktop, 1 column mobile)
- Flexbox for individual clock cards
- Media queries for mobile responsiveness (<768px)

### Visual Effects
- Gradient backgrounds and subtle shadows
- Hover effects on clock cards with scale transform
- Smooth CSS transitions (0.3s ease)
- Card-style design with rounded corners and depth

### Clock Styling
- Canvas elements centered in cards
- Consistent spacing and typography
- Location names as headers (h2)
- Fun facts in styled paragraphs with background images

## Technical Requirements
- Single HTML file with embedded CSS and JavaScript
- No external dependencies except images from picsum.photos
- Works offline after initial load (except images)
- Smooth 60fps clock animations
- Cross-browser compatibility (modern browsers)
- Mobile-responsive design

## Error Handling
- Fallback for canvas support detection
- Graceful degradation if images fail to load
- Console logging for debugging clock calculations