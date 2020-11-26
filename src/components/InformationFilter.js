import * as React from "react";
import { data } from "./informationForYears";

function InformationFilter({ allYears, selectedYears, setSelectedYears }) {
  let arrayForSelectedYears = [];

  selectedYears.map((selectYear, index) => {
    return arrayForSelectedYears.push(
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

  const filteredUniqueYears = arrayForSelectedYears.filter(makeArrUnique);

  if (filteredUniqueYears.length === 1) {
    return (
      <div className="information-container">
        <p>{data[filteredUniqueYears]}</p>
      </div>
    );
  } else {
    return (
      <div className="information-container">
        <p>Selecteer een jaar voor verdere informatie</p>
      </div>
    );
  }
}

export default InformationFilter;
