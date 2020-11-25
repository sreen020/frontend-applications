import React, { Component } from "react"
import * as d3 from "d3";
import { data } from './informationForYears';

function InformationFilter({allYears, selectedYears, setSelectedYears}) {
  const informationContainer = document.getElementsByClassName('information-container')
  let arrayForSelectedYears = []

  selectedYears.map((selectYear, index) => {
    return arrayForSelectedYears.push(selectYear.startdatesellingpoint ? selectYear.startdatesellingpoint.slice(0, 4) : null);
  })

  const makeArrUnique = (value, index, self) => {
    if (value != null) {
      return self.indexOf(value) === index
    }
  }

  const filteredUniqueYears = arrayForSelectedYears.filter(makeArrUnique)

  if (filteredUniqueYears.length === 1) {
    return(
      <div className="information-container">
        <p>{data[filteredUniqueYears]}</p>
      </div>
    )
  } else {
    return(
      <div className="information-container">
        <p>Filter op jaar voor informatie</p>
      </div>
    )
  }
  

  // return(
  //   // <div className="information-container">
  //   //   {/* <button onClick={PreviousYear()}>Vorig jaar</button> */}
  //   //   {/* <button onClick={NextYear()}>volgend jaar</button> */}
  //   // </div>


  // )
}

export default InformationFilter;