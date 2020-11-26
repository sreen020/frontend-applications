import InformationFilter from "./InformationFilter";

function InformationBox({ allYears, selectedYears, setSelectedYears }) {
  return (
    <section className="information-box">
      <h1>Filter voor informatie</h1>
      <InformationFilter
        allYears={allYears}
        selectedYears={selectedYears}
        setSelectedYears={setSelectedYears}
      />
    </section>
  );
}

export default InformationBox;
