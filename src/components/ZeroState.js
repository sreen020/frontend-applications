const { useState } = require("react");

function ZeroState() {
  // setup state for zerostate
  const [isActive, setActive] = useState("false");

  // Toogle the active state (get triggert by clicking the button)
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
      <button className="zero-state-btn" onClick={handleToggle}>
        Begrepen
      </button>
    </section>
  );
}

export default ZeroState;
