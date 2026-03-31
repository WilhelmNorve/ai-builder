# Build Plan

# Norwegian Parliament (Storting) Simulator - Technical Plan

## Core Architecture
Single HTML file with embedded CSS and JavaScript. Modern, interactive political simulation with real Norwegian political context.

## Visual Design Theme
- **Color Palette**: Norwegian flag inspired (red #EF2B2D, blue #002868, white #FFFFFF) with modern political dashboard aesthetics
- **Layout**: Fluid, card-based design with rounded corners, subtle shadows, and gradient overlays
- **Hero Section**: Large banner with Norwegian Parliament building (Stortinget) background image using `https://picsum.photos/seed/stortinget/1400/400`
- **Typography**: Clean, modern sans-serif with political gravitas

## Main Sections & Features

### 1. Header/Navigation
- Hero banner with Storting building background
- Navigation tabs: "Live Polls", "Coalition Builder", "Time Simulation", "Policy Impact"
- Modern tab switching with smooth animations

### 2. Live Party Polling Section
- **Real-time style polling dashboard** (simulated data that updates periodically)
- Current Norwegian parties with realistic poll percentages:
  - Arbeiderpartiet (Ap), Høyre (H), Senterpartiet (Sp), Fremskrittspartiet (FrP)
  - Sosialistisk Venstreparti (SV), Rødt, Venstre (V), Kristelig Folkeparti (KrF)
  - Miljøpartiet De Grønne (MDG)
- Animated percentage bars with party colors
- Mandate calculator showing seats (169 total in Storting)
- Trend arrows and change indicators

### 3. Coalition Builder Tool
- **Interactive drag & drop interface**
- Party cards that users can combine into coalitions
- Real-time majority calculator (85+ seats needed)
- Visual coalition strength meter
- Historical coalition examples (Red-Green, Blue coalition, etc.)
- "Stability score" based on ideological compatibility

### 4. Time Simulation Engine
- **Timeline slider**: Current time → 4 years ahead
- Monthly increments with major political events
- Dynamic poll changes based on:
  - Economic cycles
  - International events
  - Scandal/success modifiers
  - Seasonal political patterns
- "Crisis scenarios" button for dramatic events

### 5. Policy Impact Simulator
- **Major policy areas** with sliders:
  - Oil/Energy policy
  - EU relations
  - Immigration
  - Climate policy
  - Welfare state
  - Taxation
- Each coalition shows different policy outcomes
- "Butterfly effect" visualizer showing long-term consequences
- Economic impact graphs
- Social satisfaction meters

### 6. Geek Features & Easter Eggs
- **"Parlamentarisk krydder" (Parliamentary Spice) Generator**:
  - Random political scandal generator
  - Weird coalition name generator
  - "What if" historical scenarios
- **Voting pattern analyzer** with heat maps
- **Prime Minister probability calculator**
- **Opposition strength indicator**
- **"Regjeringsplattform" (Government Platform) word cloud generator**
- **Seat calculator with different electoral systems** (current vs. pure proportional)

### 7. Interactive Elements
- **Live debate simulator**: AI-generated party statements on current issues
- **Coalition negotiation timer**: Realistic time pressure scenarios
- **Public opinion tracker**: How policies affect voter sentiment
- **Media influence simulator**: How news cycles affect polls
- **Regional breakdown**: County-by-county political maps

## Technical Implementation Details

### Data Structure
- Static JSON-like objects for party data, polling history, and policy positions
- No external APIs needed - all data simulated with realistic Norwegian political patterns
- Local storage for user's custom coalitions and scenarios

### JavaScript Functionality
- **Tab switching system** with smooth transitions
- **Drag & drop** coalition builder using HTML5 drag API
- **Real-time updates** using setInterval for polling changes
- **Slider controls** for time simulation and policy adjustments
- **Canvas-based visualizations** for complex political graphs
- **Animation library** (CSS transitions + JavaScript) for smooth UX

### Responsive Design
- Mobile-first approach with collapsible sections
- Card-based layout that stacks on smaller screens
- Touch-friendly coalition builder for tablets
- Horizontal scrolling for timeline on mobile

### Norwegian Political Context
- Accurate party colors and ideological positions
- Realistic polling ranges based on historical data
- Current political issues (oil fund, EU, climate, immigration)
- Norwegian political terminology throughout
- References to actual Storting procedures and traditions

### Visual Enhancements
- **Gradient backgrounds** transitioning between party colors
- **Hover effects** on all interactive elements
- **Loading animations** for simulations
- **Progress bars** and gauges for various metrics
- **Icon system** for different policy areas and parties
- **Subtle parallax** effect on hero section

This creates a comprehensive, engaging political simulation that feels both educational and entertaining, with the depth and quirkiness a political geek would appreciate.