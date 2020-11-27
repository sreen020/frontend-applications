import * as React from "react";
import * as d3 from "d3";

function SelectYear({ allYears, setSelectedYears }) {
  // array with all unfiltered years
  let arrayWithAllYears = [];

  // The array above get filled with all years
  allYears.map((selectYear, index) => {
    return arrayWithAllYears.push(
      selectYear.startdatesellingpoint
        ? selectYear.startdatesellingpoint.slice(0, 4)
        : null
    );
  });

  // filter out the unique values
  const makeArrUnique = (value, index, self) => {
    if (value != null) {
      return self.indexOf(value) === index;
    }
  };

  // Use the func above to filter out all the unique years and order from low to high (ascending)
  const filteredUniqueYears = arrayWithAllYears.filter(makeArrUnique);
  filteredUniqueYears.sort(d3.ascending);

  // this function filters trough all objects and returns the objects with the selected year
  const filterResults = (uniqueYear) => (e) => {
    const filteredYears = allYears.filter((chosenYear) =>
      chosenYear.startdatesellingpoint
        ? chosenYear.startdatesellingpoint.slice(0, 4) === uniqueYear
        : null
    );
    setSelectedYears(filteredYears);
  };

  // When  the reset button is clicked the state will update to the begin state (shows all years)
  function resetState() {
    setSelectedYears(allYears);
  }

  // map trough each unique year and makes a button. When button gets clicked the filter function will mount
  function filterYears() {
    const showFilterBtns = filteredUniqueYears.map((uniqueYear, index) => {
      return (
        <button onClick={filterResults(uniqueYear)} key={index}>
          {uniqueYear}
        </button>
      );
    });
    return showFilterBtns;
  }

  return (
    <div>
      {filterYears()}
      <button
        className="reset-button"
        onClick={() => resetState()}
        key="resetKey"
      >
        Reset
      </button>
    </div>
  );
}

export default SelectYear;
