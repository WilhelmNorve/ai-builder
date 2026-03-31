# Build Plan

# Technical Plan: Simple HTML Todo List App

## Overview
Create a single HTML file containing a fully functional todo list application with local storage persistence.

## File Structure
- **Single file**: `index.html` (self-contained)
- All CSS in `<style>` tag in `<head>`
- All JavaScript in `<script>` tag at bottom of `<body>`

## HTML Structure
```
<div class="container">
  <h1>My Todo List</h1>
  <div class="input-section">
    <input type="text" id="todoInput" placeholder="Enter a new task...">
    <button id="addBtn">Add Task</button>
  </div>
  <ul id="todoList"></ul>
  <div class="stats">
    <span id="totalTasks">Total: 0</span>
    <span id="completedTasks">Completed: 0</span>
  </div>
</div>
```

## CSS Styling Requirements
- Clean, modern design with centered container
- Responsive layout (max-width: 600px)
- Input field and button styling with hover effects
- Todo items with checkbox, text, and delete button
- Completed tasks with strikethrough text and faded appearance
- Color scheme: light background, blue accents, red delete buttons
- Mobile-friendly touch targets (min 44px)

## JavaScript Functionality

### Core Features
1. **Add Task**
   - Get input value from text field
   - Validate non-empty input
   - Create new todo object with unique ID, text, and completed status
   - Add to todos array and render list
   - Clear input field and focus back to input

2. **Toggle Complete**
   - Find todo by ID in array
   - Toggle completed boolean status
   - Update display with strikethrough and fade
   - Save to localStorage

3. **Delete Task**
   - Remove todo from array by ID
   - Re-render list
   - Update stats and localStorage

4. **Render List**
   - Clear existing list HTML
   - Loop through todos array
   - Create list item HTML for each todo
   - Apply completed styling if needed
   - Attach event listeners to checkboxes and delete buttons

### Data Management
- **Todo Object Structure**: `{id: timestamp, text: string, completed: boolean}`
- **Array**: `todos = []` to store all todo items
- **localStorage**: Save/load todos array as JSON string with key "todos"

### Event Handlers
- Add button click
- Enter key press in input field
- Checkbox change events (dynamically added)
- Delete button click events (dynamically added)

### Statistics
- Count total tasks
- Count completed tasks
- Update display in stats section

### Initialization
- Load todos from localStorage on page load
- Render initial list
- Focus input field
- Update stats

## Key Technical Requirements
- Use `addEventListener` for all events
- Implement proper event delegation for dynamic elements
- Use `JSON.parse()` and `JSON.stringify()` for localStorage
- Generate unique IDs using `Date.now()`
- Prevent form submission default behavior
- Validate input before adding tasks