import React, { Component } from "react"

function SelectYear({allYears, setSelectedYears}) {
  let arrayWithAllYears = []

  allYears.map((selectYear, index) => {
    return arrayWithAllYears.push(selectYear.startdatesellingpoint ? selectYear.startdatesellingpoint.slice(0, 4) : null);
  })

  const makeArrUnique = (value, index, self) => {
    if (value != null) {
      return self.indexOf(value) === index
    }
  }
  const filteredUniqueYears = arrayWithAllYears.filter(makeArrUnique)


  // this function filters trough all objects and returns the objects with the selected year
    const filterResults = (uniqueYear) => (e) => {
      const filteredYears = allYears.filter(chosenYear => chosenYear.startdatesellingpoint ? chosenYear.startdatesellingpoint.slice(0, 4) === uniqueYear : null)
      setSelectedYears(filteredYears)
      console.log(filteredYears)
    };

  return(
    filteredUniqueYears.map((uniqueYear, index) => {
      return(
        <button onClick={filterResults(uniqueYear)} key={index}>{uniqueYear}</button>
      )
    })
    // <button onClick={setSelectedYears(allYears)}>Reset</button>
  )
}

export default SelectYear;