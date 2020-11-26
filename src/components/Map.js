import CreateMap from "./CreateMap";
import PlotPointsOnMap from "./PlotPointsOnMap";

function Map({
  selectedYears,
  allYears,
  setSelectedYears,
  mapData,
  plotPoints,
  setMapData,
}) {
  return (
    <div>
      <svg>
        <CreateMap
          mapData={mapData}
          setMapData={setMapData}
          allYears={allYears}
        />
        <PlotPointsOnMap
          plotPoints={plotPoints}
          data={allYears}
          selectedYears={selectedYears}
        />
      </svg>
    </div>
  );
}

export default Map;
