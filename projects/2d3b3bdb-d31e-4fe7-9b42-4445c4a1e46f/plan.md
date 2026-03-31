# Build Plan

# Technical Plan: Simple HTML Calculator

## Project Overview
Create a simple HTML calculator with basic arithmetic operations (addition, subtraction, multiplication, division).

## Structure Requirements

### 1. HTML Structure
- **Main container**: Calculator wrapper div
- **Display section**: Input field or div to show current number/result
- **Button grid**: 4x4 or similar layout for numbers and operations
- **Buttons needed**:
  - Numbers: 0-9 (10 buttons)
  - Operations: + (pluss), - (minus), × (gange), ÷ (dele) (4 buttons)
  - Functionality: = (equals), C (clear), . (decimal) (3 buttons)

### 2. CSS Styling
- **Layout**: CSS Grid or Flexbox for button arrangement
- **Responsive design**: Mobile-friendly button sizes
- **Visual design**:
  - Calculator frame/border
  - Button styling (hover effects, active states)
  - Display screen styling
  - Color scheme (neutral/calculator-like)
- **Typography**: Clear, readable fonts for numbers and operations

### 3. JavaScript Functionality
- **Core functions**:
  - `displayNumber()`: Show clicked numbers on screen
  - `setOperation()`: Handle +, -, ×, ÷ operations
  - `calculate()`: Perform calculation when = is pressed
  - `clearDisplay()`: Reset calculator (C button)
  - `addDecimal()`: Handle decimal point input

- **State management**:
  - Current display value
  - Previous value for calculations
  - Current operation selected
  - Decimal point tracking

- **Event handling**:
  - Click events for all buttons
  - Keyboard support (optional enhancement)

### 4. Features
- **Basic operations**: Addition, subtraction, multiplication, division
- **Clear function**: Reset all values
- **Decimal support**: Allow decimal numbers
- **Error handling**: Division by zero, invalid operations
- **Visual feedback**: Button press animations

### 5. File Organization
- Single HTML file with embedded CSS and JavaScript
- Or separate files: `index.html`, `style.css`, `script.js`

### 6. Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design

This plan creates a functional calculator that handles the four basic Norwegian arithmetic terms specified: pluss, minus, gange, and dele.