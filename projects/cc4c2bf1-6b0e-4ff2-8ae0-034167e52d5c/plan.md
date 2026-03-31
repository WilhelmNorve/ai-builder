# Build Plan

# Australian AEST Clock with Fun Facts - Technical Plan

## File Structure
- Single `index.html` file containing all code

## HTML Structure
- Hero section with Australian landscape background image
- Digital clock display with AEST timezone
- Fun fact card with rotating content
- Footer with Australian flag accent

## CSS Classes
- `.hero-section` - main banner with background image
- `.clock-container` - centered digital clock wrapper
- `.digital-clock` - styled time display
- `.timezone-label` - AEST indicator
- `.fun-fact-card` - fact display container
- `.fact-text` - animated fact content
- `.refresh-btn` - new fact button
- `.australian-theme` - color scheme wrapper
- `.loading-spinner` - fact loading indicator

## JavaScript Functions
- `updateAESTClock()` - updates digital time display every second
- `getAustralianTime()` - converts to AEST timezone
- `displayFunFact()` - shows current fact
- `getRandomFact()` - selects from fact array
- `refreshFact()` - loads new fact with animation
- `initializeClock()` - starts clock on page load
- `formatTime()` - formats time string (HH:MM:SS)

## Visual Design
- **Hero image**: `https://picsum.photos/seed/australia/1200/400`
- **Color palette**: Australian gold (#FFD700), green (#228B22), navy blue (#000080)
- **Typography**: Large digital clock font with glow effect
- **Layout**: Centered vertical stack with cards and shadows
- **Animations**: Smooth fact transitions, clock pulse effect
- **Background**: Gradient from gold to green

## Fun Facts Content
- Hardcoded array of 50+ Australian facts covering:
  - Unique animals (platypus, wombats, quokkas)
  - Geography (Uluru, Great Barrier Reef)
  - Culture (didgeridoo, bush tucker)
  - History (Aboriginal culture, gold rush)
  - Random trivia (dropbear jokes, Vegemite facts)

## Technical Implementation
- Use `Intl.DateTimeFormat` with `Australia/Sydney` timezone
- `setInterval(updateAESTClock, 1000)` for real-time updates
- CSS animations for fact card flip transitions
- Responsive design with mobile breakpoints
- No external APIs required - all content hardcoded