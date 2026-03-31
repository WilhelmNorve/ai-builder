# Build Plan

# AI-Kalkulator Teknisk Plan

## Prosjektstruktur
```
ai-calculator/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── styles/
│   │   └── utils/
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middleware/
│   │   └── utils/
│   ├── config/
│   └── package.json
└── README.md
```

## Frontend (React/Vue.js)

### Komponenter
1. **CalculatorInterface**
   - Input-felt for matematiske uttrykk
   - Display for resultat
   - Historie-panel
   - AI-forklarings-seksjon

2. **ButtonPanel**
   - Numeriske knapper (0-9)
   - Operasjons-knapper (+, -, *, /, =)
   - Funksjonelle knapper (C, AC, backspace)
   - Spesiell "AI Explain" knapp

3. **HistoryPanel**
   - Liste over tidligere beregninger
   - Mulighet for å gjenbruke tidligere uttrykk

4. **AIExplanation**
   - Tekstområde for AI-forklaringer
   - Markdown-støtte for formatering
   - Loading-indikator

### State Management
- Calculator state (current input, result, history)
- AI response state (loading, response, error)
- User preferences (theme, history limit)

## Backend (Node.js/Express)

### API Endpoints
1. **POST /api/calculate**
   - Input: Matematisk uttrykk
   - Output: Beregnet resultat + AI-forklaring
   - Validering og sikkerhet

2. **GET /api/history**
   - Hent brukerhistorikk (hvis implementert)

3. **POST /api/explain**
   - Kun AI-forklaring av eksisterende beregning

### Services
1. **CalculationService**
   - Matematisk parsing og beregning
   - Sikkerhetstiltak mot farlige uttrykk
   - Support for avanserte funksjoner

2. **AIService**
   - Integrasjon med OpenAI API / Google Gemini
   - Prompt engineering for matematiske forklaringer
   - Response parsing og formatering

3. **ValidationService**
   - Input sanitization
   - Mathematical expression validation
   - Rate limiting

## AI-Integrasjon

### Prompt Design
- System prompt for matematikkfokusert AI
- Context om beregningstype
- Instruksjoner for pedagogisk forklaring
- Formatering av svar

### AI Provider Options
1. **OpenAI GPT-4**
   - Høy kvalitet på forklaringer
   - God matematikkforståelse

2. **Google Gemini**
   - Kostnadseffektiv
   - God ytelse på matematikk

3. **Local LLM** (alternativ)
   - Ollama med matematikk-modell
   - Personvern-vennlig

## Sikkerhet og Validering

### Input Validation
- Whitelist av tillatte matematiske operasjoner
- Regex-validering av uttrykk
- Maksimal lengde på input
- Prevention av code injection

### Rate Limiting
- Per bruker/IP begrensninger
- AI API call limits
- Cost control mechanisms

### Error Handling
- Matematiske feil (division by zero, etc.)
- AI API failures
- Network timeouts
- User-friendly error messages

## Database (Valgfritt)

### Tabeller
1. **calculations**
   - id, expression, result, ai_explanation, timestamp
   - user_session (for historie)

2. **usage_stats**
   - endpoint_calls, ai_requests, timestamps
   - For monitoring og optimalisering

## Deployment

### Frontend Deployment
- Vercel/Netlify for static hosting
- Environment variables for API endpoints

### Backend Deployment
- Railway/Heroku/DigitalOcean
- Environment variables for AI API keys
- SSL sertifikat

### Environment Variables
```
AI_API_KEY=xxx
AI_MODEL=gpt-4
DATABASE_URL=xxx
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW=3600
```

## Funksjonaliteter

### Core Features
- Grunnleggende aritmetikk (+, -, *, /)
- Avanserte operasjoner (potenser, røtter)
- AI-genererte forklaringer
- Beregningshistorikk

### Advanced Features
- Trigonometriske funksjoner
- Logaritmer
- Konstantere (π, e)
- Graf-plotting (valgfritt)
- Voice input (valgfritt)

## Testing Strategy

### Frontend Testing
- Unit tests for komponenter
- Integration tests for API calls
- E2E testing med Cypress

### Backend Testing
- Unit tests for calculation logic
- API endpoint testing
- Mock AI service for testing
- Load testing for rate limits

## Performance Optimization

### Frontend
- Code splitting
- Lazy loading av komponenter
- Caching av AI responses
- Debouncing av input

### Backend
- Response caching
- Connection pooling
- AI response caching
- Request queuing

Denne planen dekker alle hovedkomponenter for en AI-drevet kalkulator med norsk fokus og moderne teknologi-stack.