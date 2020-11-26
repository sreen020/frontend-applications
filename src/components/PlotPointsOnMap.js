import React, {useEffect, useRef} from 'react'
import * as d3 from "d3";
import * as d3GeoProjection from "d3-geo-projection"
import * as topojson from "topojson";
import * as zoom from "d3-zoom";

function PlotPoints({plotPoints, data, selectedYears}){
  // Setup global variables
  const svg = d3.select("svg");
  const g = d3.select("g");
  const projection = d3.geoMercator().scale(5000).center([5.816667, 52.147]);

  setPoints(selectedYears);

  // This function places points on the map using lat and long
  function setPoints(data) {
    const points = g.selectAll("circle").data(data)
    const totalAmount = d3.select(".totalAmount")

    points
      .attr("cx", function(d) { return projection([d.location.longitude, d.location.latitude])[0] })
      .attr("cy", function(d) { return projection([d.location.longitude, d.location.latitude])[1] })
      .transition()
        .delay(function(d, i) { return i * 10; })
        .duration(50)
        .ease(d3.easeBounce)
        .attr('r', 3)

    // circle element is being created for each data object, with cx and cy attributes the circles are placed correctly
    points.enter()
        .append("circle")
        .attr("r", 0)
        .attr("cx", function(d) { return projection([d.location.longitude, d.location.latitude])[0] })
        .attr("cy", function(d) { return projection([d.location.longitude, d.location.latitude])[1] })
        .transition()
    				.delay(function(d, i) { return i * 10; })
            .duration(50)
            .ease(d3.easeBounce)
            .attr('r', 3)

    // removes circles for the filter options
    points.exit()
          .remove()

    // shows a text with the current amount of circles showed on the map
    totalAmount
      .text("Aantal getoonde parkeerautomaten: " + data.length)
  }

  return(
    <p></p>
  )
}

export default PlotPoints