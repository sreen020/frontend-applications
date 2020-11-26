// import Aside from './components/Aside'
import ZeroState from "./components/ZeroState";
import Map from "./components/Map";
import Aside from "./components/Aside";
import InformationBox from "./components/InformationBox";

const { useEffect, useState } = require("react");

function App() {
  const [loaded, setLoaded] = useState(false);
  const [selectedYears, setSelectedYears] = useState(null);
  const [allYears, setAllYears] = useState(null);
  const [mapData, setMapData] = useState(null);
  const [plotPoints, setPlotPoints] = useState(null);
  const [zeroState, setZeroState] = useState(null);

  useEffect(() => {
    fetch("https://opendata.rdw.nl/resource/cgqw-pfbp.json?$limit=1000")
      .then((res) => res.json())
      .then((data) => {
        setAllYears(data);
        setSelectedYears(data);
        setPlotPoints(data);
        setLoaded(true);
        return data;
      });

    const bbox = [11.825, 53.7253321, -68.6255319, 7.2274985];
    // Fetch data
    fetch("https://cartomap.github.io/nl/wgs84/gemeente_2020.topojson")
      .then((res) => res.json())
      .then((data) => {
        data.bbox = bbox;
        setMapData(data);
        return data;
      });
  }, []);

  if (allYears && selectedYears && mapData && plotPoints) {
    return (
      <div className="App">
        <ZeroState
          zeroState={zeroState}
          setZeroState={setZeroState}
          setSelectedYears={setSelectedYears}
          allYears={allYears}
        />
        <Aside
          allYears={allYears}
          selectedYears={selectedYears}
          setSelectedYears={setSelectedYears}
        />
        <InformationBox
          allYears={allYears}
          selectedYears={selectedYears}
          setSelectedYears={setSelectedYears}
        />
        <Map
          selectedYears={selectedYears}
          setSelectedYears={setSelectedYears}
          allYears={allYears}
          mapData={mapData}
          plotPoints={setPlotPoints}
          setMapData={setMapData}
        />
      </div>
    );
  } else if (!loaded) {
    return <div className="loadingScreen">Loading...</div>;
  } else {
    return null;
  }
}

export default App;
