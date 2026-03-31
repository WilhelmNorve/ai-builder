# Build Plan

# Stortingsimulator - Teknisk Plan

## Overordnet Konsept
En interaktiv norsk Stortingsimulator der brukeren kan justere partiopplsutning, se mandatfordeling, analysere mulige flertall og simulere framtidige vedtak.

## Hovedfunksjoner

### 1. Partiopplutning og Mandatberegning
- **Partier som inkluderes:**
  - Arbeiderpartiet (Ap)
  - Høyre (H)  
  - Senterpartiet (Sp)
  - Fremskrittspartiet (FrP)
  - Sosialistisk Venstreparti (SV)
  - Rødt (R)
  - Venstre (V)
  - Kristelig Folkeparti (KrF)
  - Miljøpartiet De Grønne (MDG)

- **Interaktive kontroller:**
  - Slider for hvert parti (0-40%)
  - Automatisk normalisering til 100% totalt
  - Sanntids mandatberegning (169 mandater totalt)
  - Visuell representasjon med partifargede søyler/kaker

### 2. Mandatfordelingssystem
- **Beregningsmetode:** Modifisert Sainte-Laguës metode
- **Visualisering:**
  - Stortingsal-layout med 169 seter i partifargede cirkler
  - Numerisk oversikt per parti
  - Prosent vs mandater sammenligning

### 3. Flertallets og Koalisjonsanalyse
- **Automatisk flertallssjekk:**
  - Rødt/Rød side (Ap, SV, R, ev. Sp)
  - Borgerlig side (H, FrP, V, KrF)
  - Sentrum/vippeposisjon (Sp, V, KrF, MDG)

- **Sannsynlighetsvurdering:**
  - Basert på historiske samarbeidsmønstre
  - Ideologisk kompatibilitet
  - Fargekoding: Grønn (sannsynlig), gul (usikker), rød (usannsynlig)

### 4. Vedtakssimulator
- **Sakskategorier:**
  - Økonomi/skatter
  - Klima/miljø
  - Innvandring
  - Helse/velferd
  - EU/EØS
  - Forsvar/sikkerhet

- **Simuleringslogikk:**
  - Hvert parti har forhåndsdefinerte standpunkter (for/mot/nøytral)
  - Beregner sannsynlig utfall basert på mandatfordeling
  - Viser stemmefordeling og resultat

### 5. Tilleggsfunksjoner
- **Historisk sammenligning:**
  - Data fra siste 2-3 valg
  - "Sammenlign med 2021"-knapp

- **Scenario-presets:**
  - "Rød bølge"
  - "Borgerlig comeback" 
  - "Senterpartiet-boom"
  - "Fragmentert storting"

- **Statistikk:**
  - Regjeringsalternativer rangert etter sannsynlighet
  - Nøkkelpartier for flertall
  - Vippemandat-analyse

## Teknisk Implementasjon

### HTML-struktur
```
- Header med tittel og forklaring
- Kontrollpanel med party-slidere
- Mandatvisning (både numerisk og visuell)
- Flertallsanalyse-seksjon
- Vedtakssimulator
- Historisk data panel
- Footer med kilder/metodikk
```

### CSS-design
- **Fargepalett:** Autentiske norske partifarge
- **Layout:** Grid-basert, responsiv design
- **Animasjoner:** Smooth transitions ved endringer
- **Visualisering:** CSS-charts og Stortingsal-layout

### JavaScript-funktionalitet
- **Datastrukturer:**
  - Parti-objekter med navn, farge, ideologi
  - Saksobjekter med partistandpunkter
  - Historiske valgresultater

- **Mandatberegning:**
  - Implementer Sainte-Laguës metode
  - 4% sperregrense logikk
  - Sanntidsoppdatering ved slider-endring

- **Koalisjonsalgoritme:**
  - Sjekk alle mulige kombinasjoner
  - Vurder kompatibilitet basert på forhåndsdefinerte regler
  - Ranger etter sannsynlighet

- **Vedtakssimulator:**
  - Saksbibliotek med partiposisjoner
  - Stemmeberegning basert på mandater
  - Resultatpresentasjon

### Datakilder
- **Ingen eksterne API-er nødvendig**
- Alle data hardkodet basert på:
  - Offisielle valgresultater (SSB)
  - Kjente partistandpunkter
  - Historiske samarbeidsmønstre

### Brukeropplevelse
- Intuitiv drag-and-drop/slider interface  
- Sanntids feedback og oppdateringer
- Pedagogiske forklaringer av beregningsmetoder
- Responsivt design for mobil og desktop

### Utvidelsesmuligheter
- Fylkesfordeling simulering
- Tidsbaserte trender
- "Hva om"-scenarioer for spesifikke saker
- Export/share-funksjonalitet for resultater

Hele løsningen leveres som én komplett index.html fil uten eksterne avhengigheter.