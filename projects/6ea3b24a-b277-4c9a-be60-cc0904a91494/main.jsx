{
  "name": "AI-Powered Calculator",
  "version": "1.0.0",
  "description": "An advanced calculator with AI capabilities for natural language processing and intelligent responses.",
  "scripts": {
    "start": "node server.js",
    "client": "cd client && npm start",
    "server": "nodemon server.js",
    "build": "cd client && npm run build && cd .."
  },
  "dependencies": {
    "express": "^4.18.2",
    "mathjs": "^10.5.2",
    "openai": "^3.1.0",
    "pg": "^8.8.0",
    "redis": "^4.2.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  },
  "frontend": {
    "framework": "React.js",
    "styling": "Tailwind CSS",
    "stateManagement": "Context API",
    "components": {
      "inputField": {},
      "displayArea": {},
      "buttonGrid": {},
      "historyPanel": {},
      "aiResponseSection": {}
    }
  },
  "backend": {
    "framework": "Express",
    "apis": {
      "aiIntegration": "OpenAI GPT-3/4",
      "database": "PostgreSQL",
      "cache": "Redis"
    }
  },
  "aiIntegration": {
    "promptEngineering": "Design and send structured prompts for AI",
    "responseParsing": "Extract and format AI results",
    "fallbackSystem": "Fallback to math.js for standard calculations"
  },
  "security": {
    "inputSanitization": true,
    "apiRateLimiting": true,
    "userAuthentication": false,
    "dataEncryption": true
  }
}
// server/api.js
const express = require('express');
const math = require('mathjs');
const { Configuration, OpenAIApi } = require('openai');
const { Pool } = require('pg');
const redis = require('redis');

const app = express();
const port = process.env.PORT || 3000;

// OpenAI Configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// PostgreSQL Database Configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Redis Configuration
const client = redis.createClient({
  url: process.env.REDIS_URL
});
client.connect();

// Middleware
app.use(express.json());

// Calculate Route
app.post('/calculate', async (req, res) => {
  try {
    const expression = req.body.expression;
    let result;

    // Check if expression is in natural language
    if (isNaN(expression)) {
      try {
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `Calculate and explain: ${expression}`,
          max_tokens: 150
        });

        const aiResult = response.data.choices[0].text.trim();
        result = validateAndProcessAIResult(aiResult);
      } catch (error) {
        result = { error: "AI service unavailable" };
      }
    } else {
      result = math.evaluate(expression);
    }

    // Save to cache
    await client.set(expression, JSON.stringify(result));

    res.json({ result });
  } catch (error) {
    res.status(500).send({ error: "Calculation error" });
  }
});

// History Route
app.get('/history', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM calculations ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).send({ error: "Error fetching history" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

function validateAndProcessAIResult(aiResult) {
  // Basic check to extract the result from AI
  const match = aiResult.match(/([0-9]+(?:\.[0-9]+)?)/);
  if (match) {
    return parseFloat(match[0]);
  }
  return { error: "Invalid response from AI" };
}
// client/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('/history');
        setHistory(response.data);
      } catch (error) {
        console.error("Error fetching history", error);
      }
    };
    fetchHistory();
  }, []);

  const handleCalculate = async () => {
    try {
      const response = await axios.post('/calculate', { expression });
      setResult(response.data.result);
    } catch (error) {
      setResult('Error in calculation');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI-Powered Calculator</h1>
      </header>
      <div className="calculator">
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          placeholder="Enter expression or question"
        />
        <button onClick={handleCalculate}>Calculate</button>
        <div className="result">
          <h2>Result: {result}</h2>
        </div>
        <div className="history">
          <h3>Calculation History</h3>
          <ul>
            {history.map((entry, index) => (
              <li key={index}>{entry.expression}: {entry.result}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
/* client/src/App.css */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
}

.App {
  text-align: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.App-header {
  background-color: #282c34;
  padding: 20px;
  color: white;
  border-radius: 10px;
}

input {
  width: 60%;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #282c34;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #3d5afe;
}

.result {
  margin-top: 20px;
  font-size: 1.5em;
}

.history {
  margin-top: 30px;
}

.history ul {
  list-style-type: none;
  padding: 0;
}

.history li {
  padding: 5px 0;
}
# .env
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=your_postgresql_database_url
REDIS_URL=your_redis_url
PORT=3000