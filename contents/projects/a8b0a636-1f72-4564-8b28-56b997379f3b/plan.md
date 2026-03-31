# Build Plan

# Teknisk plan for HTML kalkulator

## Struktur og komponenter

### HTML struktur
- **Container div** for hele kalkulatoren
- **Display område** for å vise tall og resultater
- **Knapper layout**:
  - Tallknapper (0-9)
  - Operatorknapper (+, -, ×, ÷)
  - Funksjonelle knapper (=, C for clear)

### CSS styling
- **Layout**: CSS Grid eller Flexbox for knappeoppsett
- **Design**: Enkel og ren stil med tydelige knapper
- **Responsivt design** for ulike skjermstørrelser
- **Hover-effekter** på knapper

### JavaScript funksjonalitet
- **Variabler**:
  - Gjeldende tall
  - Forrige tall
  - Valgt operator
  - Display verdi

- **Funksjoner**:
  - `updateDisplay()` - oppdater skjermen
  - `inputNumber()` - håndter tallinngang
  - `inputOperator()` - håndter operator-valg
  - `calculate()` - utfør beregning
  - `clear()` - nullstill kalkulator

- **Event listeners** for alle knapper

## Funksjonelle krav
- Støtte for grunnleggende matematiske operasjoner
- Kontinuerlige beregninger (bruke resultat i neste operasjon)
- Clear-funksjon for å nullstille
- Feilhåndtering (deling på null, etc.)
- Desimaltall støtte

## Tekniske spesifikasjoner
- **Filstruktur**: En enkelt HTML-fil med inline CSS og JavaScript
- **Kompatibilitet**: Moderne nettlesere
- **Ytelse**: Lett og rask respons på knappetrykk