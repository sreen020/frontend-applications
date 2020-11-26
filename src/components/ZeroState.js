const { useState } = require("react");

function ZeroState() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <section className={`zero-state ${!isActive ? "hide-state" : ""}`}>
      <h1>Parkeerautomaten in Nederland</h1>
      <p>
        Hoe heeft het aantal parkeerautomaten in Nederland zich door de jaren
        heet ontwikkeld?
      </p>

      <p>
        Met de knoppen aan de rechterkant van het scherm kan je filteren op een
        specifiek jaar. Link verschijnt interessante informatie over jouw
        gekozen jaar.
      </p>
      <button onClick={handleToggle}>Begrepen</button>
    </section>
  );
}

export default ZeroState;
