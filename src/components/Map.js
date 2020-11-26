import CreateMap from './CreateMap'
import PlotPointsOnMap from './PlotPointsOnMap'
const { useEffect, useState } = require("react");

function Map({selectedYears, allYears, setSelectedYears, mapData, plotPoints}) {
  return(
    <div>
      <svg>
        <CreateMap mapData={mapData} />
        <PlotPointsOnMap plotPoints={plotPoints} data={allYears} selectedYears={selectedYears}/>
      </svg>
    </div>
  )
}

export default Map