import * as React from "react";
import * as d3 from "d3";

function SelectYear({ allYears, setSelectedYears }) {
  let arrayWithAllYears = [];

  allYears.map((selectYear, index) => {
    return arrayWithAllYears.push(
      selectYear.startdatesellingpoint
        ? selectYear.startdatesellingpoint.slice(0, 4)
        : null
    );
  });

  const makeArrUnique = (value, index, self) => {
    if (value != null) {
      return self.indexOf(value) === index;
    }
  };
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

  function resetState() {
    setSelectedYears(allYears);
  }

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
      <button onClick={() => resetState()} key="resetKey">
        Reset
      </button>
    </div>
  );
}

export default SelectYear;
