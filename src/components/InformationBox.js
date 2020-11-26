import InformationFilter from "./InformationFilter";

function InformationBox({ allYears, selectedYears, setSelectedYears }) {
  return (
    <section className="information-box">
      <h1>Informatie</h1>
      <InformationFilter
        allYears={allYears}
        selectedYears={selectedYears}
        setSelectedYears={setSelectedYears}
      />
    </section>
  );
}

export default InformationBox;
