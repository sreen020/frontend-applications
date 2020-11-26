# Front-end Applications

## Live demo

https://sreen020.netlify.app/

## Concept

***Hoofdvraag***<br>
Waar en hoeveel parkeerautomaten worden er jaarlijks in Nederland geplaatst?

***Deelvragen en assumpties*** 
* komen er sommige jaren meer bij dan andere jaren? (Ik denk dat er ieder jaar meer bijkomen, zeker als we kijken naar de grotere steden)
* Zijn er plaatsen waar de toename groter is dan andere plaatsen? (Ik denk dat de toename in grote steden en daar omheen fors toeneemt)
* Moet ik hier het hele Jaar door betaald parkeren of alleen in bepaalde maanden? (In de voorbeeld datarijen zag ik veel colommen staan waar je een aantal maanden niet hoeft te betalen)
* Waar en hoeveel parkeer parkeerautomaten komen er jaarlijks bij?

Deze vragen ben ik gaan onderzoeken aan de hand van datasets. Uiteindelijk heb ik een website gebouwd met behulp van een front-end framework waarin ik een overzichtelijke data visualisatie laat zien. Hier is het aantal parkeer automaten in Nederland te zien en hoe dit aantal zich heeft ontwikkeld.


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

## Dataset(s)

**Dataset #1**<br>
https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEO-VERKOOPPUNT/cgqw-pfbp/ 

**Wat krijg ik uit deze dataset?** 
- AreaManagerId, number (Identificatiecode van de gebiedsbeheerder of parkeerexploitant.)
- SellingPointId, number (Identificatiecode van een verkooppunt. Het SellingPointId is numeriek en hoeft niet uniek te zijn. Een SellingPointId kan op meerdere locaties voorkomen, die samen een verkooppuntgroep vormen.)
- StartDateSellingPoint, number (Datum vanaf wanneer een bepaald verkooppunt actief is.)
- EndDateSellingPoint, number (Datum waarop een bepaald verkooppunt niet meer actief is.)
- SellingPointDesc, string (Omschrijving van een verkooppunt.)
- Location, string (De coördinaten van een verkooppunt.)

StartDateSellingPoint en EndDateSellingPoint worden weergegeven als: 20150301. Hier staat 01-03-2015, dmv de slice functie javascript heb ik deze getransformeerd naar het juiste formaat.

De location wordt bijvoorbeeld als: (51.733028°, 3.774917°) getoond. Dit is opgedeeld in latitude en longitude. Deze heb ik in mijn javascript gescheiden waardoor ik ze straks met D3 kan verwerken.

**Wat ga ik gebruiken?** 
Ik wil uit deze dataset de location gebruiken om te laten zien waar en hoeveel parkeerautomaten er in Nederland zijn. Ook wil ik de StartDateSellingPoint en de EndDateSellingPoint gebruiken om aan de hand van een timeline weer te geven wanneer deze punten zijn neergezet.

**JSON**
``` js
{
  areamanagerid: "299"
  location: [
    {
      latitude: "51.930899297"
      longitude: "6.076162452"
    }
  ]
  sellingpointdesc: "Parkeerterrein Haspelstraat"
  sellingpointid: "8704"
  startdatesellingpoint: "20180604"
}

```
