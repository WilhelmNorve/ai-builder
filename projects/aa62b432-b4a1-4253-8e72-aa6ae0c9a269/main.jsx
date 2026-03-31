ai-calculator/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CalculatorInterface.jsx
│   │   │   ├── ButtonPanel.jsx
│   │   │   ├── HistoryPanel.jsx
│   │   │   └── AIExplanation.jsx
│   │   ├── services/
│   │   │   ├── apiService.js
│   │   └── utils/
│   │   ├── styles/
│   │   ├── App.js
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── calculationController.js
│   │   │   └── aiController.js
│   │   ├── services/
│   │   │   ├── CalculationService.js
│   │   │   ├── AIService.js
│   │   │   └── ValidationService.js
│   │   ├── middleware/
│   │   │   ├── securityMiddleware.js
│   │   └── utils/
│   │   │   ├── helper.js
│   ├── config/
│   │   └── config.js
│   ├── index.js
│   └── package.json
└── README.md
import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import HistoryPanel from './HistoryPanel';
import AIExplanation from './AIExplanation';
import './styles/CalculatorInterface.css';

const CalculatorInterface = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const [aiExplanation, setAiExplanation] = useState('');

  const handleInput = (value) => {
    setInput(prev => prev + value);
  };

  const calculateResult = async () => {
    try {
      // Call the backend API for calculation
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expression: input }),
      });
      const data = await response.json();
      setResult(data.result);
      setAiExplanation(data.aiExplanation);
      setHistory([ ...history, { expression: input, result: data.result } ]);
      setInput('');
    } catch (error) {
      console.error('Calculation error:', error);
    }
  };

  const handleAiExplain = async () => {
    try {
      const response = await fetch('/api/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expression: input }),
      });
      const data = await response.json();
      setAiExplanation(data.explanation);
    } catch (error) {
      console.error('AI explanation error:', error);
    }
  };

  return (
    <div className="calculator-interface">
      <div className="display">{input || result}</div>
      <ButtonPanel onInput={handleInput} onCalculate={calculateResult} onAiExplain={handleAiExplain} />
      <HistoryPanel history={history} />
      <AIExplanation explanation={aiExplanation} />
    </div>
  );
};

export default CalculatorInterface;
import React from 'react';

const ButtonPanel = ({ onInput, onCalculate, onAiExplain }) => {
  return (
    <div className="button-panel">
      {'1234567890+*/-'.split('').map(char => (
        <button key={char} onClick={() => onInput(char)}>{char}</button>
      ))}
      <button onClick={onCalculate}>=</button>
      <button onClick={onAiExplain}>AI Explain</button>
      <button onClick={() => onInput('C')}>C</button>
      <button onClick={() => onInput('AC')}>AC</button>
      <button onClick={() => onInput('Backspace')}>Back</button>
    </div>
  );
};

export default ButtonPanel;
import React from 'react';

const HistoryPanel = ({ history }) => (
  <div className="history-panel">
    <h3>History</h3>
    <ul>
      {history.map((entry, index) => (
        <li key={index}>{entry.expression} = {entry.result}</li>
      ))}
    </ul>
  </div>
);

export default HistoryPanel;
import React from 'react';

const AIExplanation = ({ explanation }) => (
  <div className="ai-explanation">
    <h3>AI Explanation</h3>
    <div>{explanation ? explanation : 'No explanation available.'}</div>
  </div>
);

export default AIExplanation;
const math = require('mathjs');

class CalculationService {
  static calculate(expression) {
    try {
      // Validate and calculate the expression
      const result = math.evaluate(expression);
      return { result };
    } catch (error) {
      throw new Error('Invalid mathematical expression.');
    }
  }
}

module.exports = CalculationService;
const fetch = require('node-fetch');

class AIService {
  static async getAIExplanation(expression) {
    try {
      const response = await fetch('https://api.openai.com/v1/engines/gpt-4/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.AI_API_KEY}`
        },
        body: JSON.stringify({
          prompt: `Explain the following mathematical expression with details: ${expression}`,
          max_tokens: 150
        })
      });
      const data = await response.json();
      return { explanation: data.choices[0].text };
    } catch (error) {
      throw new Error('AI explanation service failed.');
    }
  }
}

module.exports = AIService;
class ValidationService {
  static validateExpression(expression) {
    const regex = /^[0-9+\-*/().\s]+$/;
    if (!regex.test(expression)) {
      throw new Error('Invalid characters in expression');
    }
    // Additional validations...
  }
}

module.exports = ValidationService;
const CalculationService = require('../services/CalculationService');
const AIService = require('../services/AIService');
const ValidationService = require('../services/ValidationService');

exports.calculate = async (req, res) => {
  const { expression } = req.body;

  try {
    ValidationService.validateExpression(expression);
    const { result } = CalculationService.calculate(expression);
    const { explanation } = await AIService.getAIExplanation(expression);
    res.json({ result, aiExplanation: explanation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const AIService = require('../services/AIService');
const ValidationService = require('../services/ValidationService');

exports.explain = async (req, res) => {
  const { expression } = req.body;

  try {
    ValidationService.validateExpression(expression);
    const { explanation } = await AIService.getAIExplanation(expression);
    res.json({ explanation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const express = require('express');
const bodyParser = require('body-parser');
const calculationController = require('./src/controllers/calculationController');
const aiController = require('./src/controllers/aiController');

const app = express();
app.use(bodyParser.json());

app.post('/api/calculate', calculationController.calculate);
app.post('/api/explain', aiController.explain);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
# AI-Kalkulator

## Introduction
AI-Kalkulator is an advanced calculator application integrated with AI functionalities for educational mathematical explanations.

## Features
- Basic arithmetic operations
- Calculations with AI-generated explanations
- Calculation history

## Technologies
- Frontend: React
- Backend: Node.js/Express
- AI: OpenAI API

## Setup

### Frontend
1. Navigate to the `frontend` directory.
2. Run `npm install` to install the dependencies.
3. Start the frontend with `npm start`.

### Backend
1. Navigate to the `backend` directory.
2. Run `npm install` to install the dependencies.
3. Start the backend with `node index.js`.

## Environment Variables
Define the following variables in a `.env` file for the backend:

## Deployment
Frontend and backend can be deployed separately using platforms like Vercel/Netlify (for frontend) and Railway/Heroku (for backend).