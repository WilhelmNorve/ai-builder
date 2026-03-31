# Build Plan

# Technical Plan: British Time Clock

## Project Overview
Create a single HTML file containing a functional digital clock that displays current British time (GMT/BST with automatic daylight saving time adjustment).

## Core Requirements
- Real-time digital clock display
- Automatic British timezone (Europe/London) detection
- Handles GMT (winter) and BST (summer) automatically
- Updates every second
- Clean, readable interface

## Technical Implementation Plan

### HTML Structure
- Main container div for the clock
- Clock display element showing time
- Optional date display element
- Title indicating "British Time" or "London Time"

### CSS Styling (in <style> tag)
- Center the clock on the page
- Large, readable font for time display
- Modern, clean design
- Dark or light theme with good contrast
- Responsive design that works on different screen sizes
- Optional styling for date display
- Smooth transitions/animations if desired

### JavaScript Functionality (in <script> tag)
- Use `new Date()` to get current time
- Use `toLocaleString()` with 'Europe/London' timezone
- Format time as HH:MM:SS (24-hour or 12-hour format)
- Use `setInterval()` to update every 1000ms (1 second)
- Handle timezone conversion automatically
- Optional: Display current date
- Optional: Show timezone indicator (GMT/BST)

### Key Features to Include
1. Real-time updates (every second)
2. Proper British timezone handling
3. Clean, readable display
4. Automatic daylight saving time adjustment
5. Cross-browser compatibility

### File Structure
- Single `index.html` file
- All CSS in `<style>` tag within `<head>`
- All JavaScript in `<script>` tag before closing `</body>`
- No external dependencies or separate files
- Self-contained and fully functional when opened in browser

### Browser Compatibility
- Use standard JavaScript Date methods
- Ensure compatibility with modern browsers
- Test timezone functionality works correctly