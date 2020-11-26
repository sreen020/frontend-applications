# Front-end Applications

## Live demo

https://sreen020.netlify.app/

## Install

***Clone repo***
```
git clone git@github.com:sreen020/frontend-applications.git
```

***navigate in terminal to directory***

```
cd ../../../..
```

***Install project***

```
npm install
```

***run project***
```
npm start
```

## Concept

***Hoofdvraag***<br>
Waar en hoeveel parkeerautomaten worden er jaarlijks in Nederland geplaatst?

***Deelvragen en assumpties*** 
* komen er sommige jaren meer bij dan andere jaren? (Ik denk dat er ieder jaar meer bijkomen, zeker als we kijken naar de grotere steden)
* Zijn er plaatsen waar de toename groter is dan andere plaatsen? (Ik denk dat de toename in grote steden en daar omheen fors toeneemt)
* Moet ik hier het hele Jaar door betaald parkeren of alleen in bepaalde maanden? (In de voorbeeld datarijen zag ik veel colommen staan waar je een aantal maanden niet hoeft te betalen)
* Waar en hoeveel parkeer parkeerautomaten komen er jaarlijks bij?

Deze vragen ben ik gaan onderzoeken aan de hand van datasets. Uiteindelijk heb ik een website gebouwd met behulp van een front-end framework waarin ik een overzichtelijke data visualisatie laat zien. Hier is het aantal parkeer automaten in Nederland te zien en hoe dit aantal zich heeft ontwikkeld.


**Dataset #2**<br>
https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-VERKOOPPUNT/j96a-7nhx

**Wat krijg ik uit deze dataset?** 
- SellingPointNumber, number (Identificatie van een verkooppunt.) 
- PaymentMethod, string (Betaalmethode die gebruikt kan worden voor het betalen van parkeren binnen een parkeergebied of -faciliteit.)
- StartDatePaymentMethod, number (Begindatum en -tijd van de periode waarin een bepaalde betaalmethode voor een verkooppunt geldig is.)
- EndDatePaymentMethod, number (Einddatum en -tijd van de periode waarin een bepaalde betaalmethode voor een verkooppunt geldig is.)

**Wat ga ik gebruiken?** 
Met deze dataset kan ik zien hoe er voornamelijk wordt betaald bij verschillende verkooppunten. Hier kan ik weer nieuwe vraagstukken uit halen, zoals: Waarom wordt er in steden meer met mobiel betaald dan op het platteland? of Hoe zal het komen dat er na 2018 helemaal niet meer wordt betaald met cash in Amsterdam?

Als het goed is kan ik deze linken met de verkooppunten van dataset 1 en kan ik deze visualisaties samenvoegen.
