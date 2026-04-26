# AngularJS Tutorial

En interaktiv læringsapp som demonstrerer AngularJS-konsepter med praktiske eksempler.

## Eksempler

1. **Data Binding** – vise scope-variabler i view
2. **Two-Way Binding** – input-felt synkronisert med modell i sanntid
3. **Cascading Select** – ng-options med avhengige selects
4. **Search (filter)** – filtrere lister med ng-repeat filter
5. **ng-show / ng-hide** – vise/skjule elementer basert på boolean + fjern-knapp
6. **Events** – legge til nye personer med ng-click, vise språk som badges

## Tech Stack

- AngularJS 1.8.3
- Ren CSS (ingen rammeverk)
- Inline array DI annotation (minification-safe)

## Kjøre

Åpne `public_html/index.html` direkte i en nettleser.

## Prosjektstruktur

```
public_html/
├── index.html          # Hovedside med alle 6 eksempler
├── css/
│   └── main.css        # App-styling
└── js/
    ├── angular.min.js  # AngularJS 1.8.3
    ├── app.js          # Modul-definisjon
    └── maincontroller.js  # Controller med data og logikk
```
