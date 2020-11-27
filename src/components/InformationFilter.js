import * as React from "react";
import { data } from "./informationForYears";

// This function will show a information field for a spicific filtered year
function InformationFilter({ allYears, selectedYears, setSelectedYears }) {
  let arrayForSelectedYears = [];

  // The data will be filtered and the filtered objects will be pushed in the empty array above
  selectedYears.map((selectYear, index) => {
    return arrayForSelectedYears.push(
      selectYear.startdatesellingpoint
        ? selectYear.startdatesellingpoint.slice(0, 4)
        : null
    );
  });

  // We check if the values of the array and filter the unique ones only
  const makeArrUnique = (value, index, self) => {
    if (value != null) {
      return self.indexOf(value) === index;
    }
  };
  const filteredUniqueYears = arrayForSelectedYears.filter(makeArrUnique);

  // Check is there is a filter active, ifso het shows the information
  if (filteredUniqueYears.length === 1) {
    return (
      <div className="information-container">
        <p>
          <strong>{filteredUniqueYears}</strong>
        </p>
        <p>{data[filteredUniqueYears]}</p>
      </div>
    );
  } else {
    return (
      <div className="information-container">
        <p>
          <strong>Selecteer een jaar voor verdere informatie</strong>
        </p>
      </div>
    );
  }
}

export default InformationFilter;
