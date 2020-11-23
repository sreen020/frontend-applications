import CreateMap from './CreateMap'
import PlotPointsOnMap from './PlotPointsOnMap'
const { useEffect, useState } = require("react");

function Map({selectedYears, allYears, setSelectedYears, mapData, plotPoints}) {
console.log("selectedYears", selectedYears);
return(
  <div>
    <svg>
     <CreateMap mapData={mapData} />
     <PlotPointsOnMap plotPoints={plotPoints} data={allYears} selectedYears={selectedYears}/>
    </svg>
  </div>
)
  // if(selectedYears) {
  //   return(
  //     selectedYears.map((row, index) => {
  //       return(
  //         <div key={index}>
  //           <p>{row.sellingpointdesc}</p>
  //           <p>{row.areamanagerid}</p>
  //         </div>
  //       )
  //     })
  //   )
  // } else {
  //   return(null)
  // }

}

export default Map