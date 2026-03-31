# Build Plan

# Stortingssimulator - Technical Plan

## Overview
Create an engaging Norwegian Parliament (Storting) simulator with real polling data visualization and interactive coalition-building features. The application will be a single HTML file with modern design, allowing users to explore current political landscapes and create their own parliamentary majorities.

## Core Features

### 1. Current Polling Dashboard
- Display latest polling averages for all major Norwegian political parties
- Interactive bar chart showing current support percentages
- Seat projection based on current polls (169 seats total)
- Visual party colors and logos (using party initials as placeholders)
- Last updated timestamp

### 2. Interactive Coalition Builder
- Drag-and-drop interface to build government coalitions
- Real-time seat counter showing total coalition seats
- Majority indicator (85+ seats needed)
- Party compatibility warnings/suggestions
- Save and share coalition combinations

### 3. Historical Trends
- Mini charts showing polling trends over time (simulated data)
- Comparison with previous election results (2021)
- Swing analysis from last election

### 4. Election Scenarios
- "What if" scenarios with adjustable party support
- Sliders to modify each party's polling percentage
- Dynamic seat recalculation
- Alternative election threshold testing (4% vs other thresholds)

## Technical Implementation

### Data Structure
```javascript
// Norwegian parties with current polling averages (simulated realistic data)
parties = {
  "AP": { name: "Arbeiderpartiet", support: 18.5, color: "#DA020E", seats: 0 },
  "H": { name: "Høyre", support: 20.2, color: "#0065F1", seats: 0 },
  "SP": { name: "Senterpartiet", support: 6.8, color: "#00841F", seats: 0 },
  "FrP": { name: "Fremskrittspartiet", support: 11.4, color: "#006AA7", seats: 0 },
  "SV": { name: "Sosialistisk Venstreparti", support: 7.9, color: "#FF7100", seats: 0 },
  "R": { name: "Rødt", support: 4.2, color: "#D2001F", seats: 0 },
  "V": { name: "Venstre", support: 4.6, color: "#066A36", seats: 0 },
  "MDG": { name: "Miljøpartiet De Grønne", support: 3.1, color: "#66B32E", seats: 0 },
  "KrF": { name: "Kristelig Folkeparti", support: 3.8, color: "#F4A024", seats: 0 },
  "PP": { name: "Pasientfokus", support: 0.8, color: "#7B3F98", seats: 0 }
}
```

### API Integration
- **NO EXTERNAL APIS NEEDED** - All polling data will be realistic but simulated
- Use static data that represents current Norwegian political landscape
- Include timestamp simulation for "last updated" feature

### Visual Design Elements

#### Hero Section
- Background: Political-themed gradient (deep blue to lighter blue)
- Hero image: `https://picsum.photos/seed/parliament/1200/400`
- Large title: "Stortingssimulator 2024"
- Subtitle: "Utforsk norsk politikk - fra meningsmålinger til regjeringsalternativer"

#### Color Scheme
- Norwegian flag-inspired palette (red, white, blue)
- Party-specific colors for all visualizations
- Modern gradients and shadows throughout

#### Layout Structure
1. **Header/Navigation**
   - Logo area with Storting building icon (Unicode: 🏛️)
   - Tab navigation: "Målinger", "Koalisjonsspill", "Scenarier"

2. **Main Dashboard**
   - Current polling chart (horizontal bars)
   - Seat projection wheel/donut chart
   - Key statistics cards

3. **Interactive Sections**
   - Coalition builder with drag zones
   - Scenario sliders
   - Results visualization

### Interactive Features

#### Drag & Drop Coalition Builder
- Two zones: "Available Parties" and "Your Coalition"
- Drag parties between zones
- Real-time seat calculation
- Majority threshold indicator (85/169 seats)
- Coalition name generator

#### Dynamic Charts
- Responsive bar charts using CSS and JavaScript
- Animated transitions when data changes
- Hover effects showing detailed information
- Mobile-friendly touch interactions

#### Scenario Testing
- Range sliders for each party (0-40% support)
- Real-time seat recalculation using D'Hondt method
- Reset to current polling button
- Historical comparison overlay

### Seat Calculation Logic
Implement simplified D'Hondt method for 169 seats:
- Apply 4% election threshold
- Distribute seats proportionally among qualifying parties
- Round to nearest whole seats
- Handle remainder seats appropriately

### User Engagement Features

#### Gamification Elements
- "Political IQ" quiz about Norwegian politics
- Achievement badges for different coalition combinations
- "Scenario of the Day" challenges
- Social sharing of coalition builds

#### Educational Content
- Party profile cards with key policies
- Historical government formations
- Election system explainer
- Political terminology glossary

### Responsive Design
- Mobile-first approach
- Tablet-optimized charts and interactions
- Desktop enhanced features
- Touch-friendly controls throughout

### Performance Considerations
- Lazy loading for complex visualizations
- Efficient DOM manipulation
- Smooth animations using CSS transitions
- Minimal external dependencies

### Content Sections
1. **Live Dashboard**: Current polls and projections
2. **Coalition Lab**: Interactive government building
3. **Time Machine**: Historical data and trends
4. **Crystal Ball**: Scenario testing and predictions
5. **Politics 101**: Educational content and explanations

This simulator will provide an engaging, educational, and interactive experience for users interested in Norwegian politics, combining real political insights with gamified elements to maximize user engagement and retention.