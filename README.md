# Wetter-App

Diese App zeigt das aktuelle Wetter und eine 5-Tage-Vorhersage für einen bestimmten Ort an.

## Funktionen

- Zeigt die aktuelle Temperatur, Bewölkung, Niederschlagswahrscheinlichkeit etc.
- 5-Tage-Wettervorhersage mit Temperaturhöchst- und -tiefstwerten
- Suchfunktion nach Ort oder PLZ
- Dark/Light Theme Umschaltung
- Offline-Fähigkeit durch Caching der Wetterdaten

## Technologien

- React Native für die mobile App
- OpenWeatherMap API für die Wetterdaten
- AsyncStorage für das Cachen der Daten offline
- React Navigation für Routen und Navigation
- React Native Paper für UI-Komponenten

## Installation

1. Klonen Sie das Repository
2. Führen Sie `npm install` aus, um die Abhängigkeiten zu installieren 
3. Erstellen Sie einen API Schlüssel auf https://openweathermap.org
4. Fügen Sie den API Schlüssel in eine .env Datei hinzu
5. Führen Sie `npm start` aus

## Funktionsweise

Die App ruft die aktuellen und prognostizierten Wetterdaten von der OpenWeatherMap API ab und speichert sie lokal mit AsyncStorage. React Navigation wird für Routen und die Navigation zwischen den Screens verwendet. React Native Paper bietet einige nützliche UI-Komponenten. 

## Weiterentwicklung

- Integrieren von Live-Wetterdaten auch offline
- Erweitern um zusätzliche Orte
- Anzeige von detaillierteren Wetterinformationen
- Verbessern der Look-and-Feel Gestaltung
- Hinzufügen weiterer Themen

Ich hoffe diese Wetter-App ist hilfreich! Bei Fragen oder Verbesserungsvorschlägen melde dich gerne.
