const { useState } = require("react");

function ZeroState() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <section className={`zero-state ${!isActive ? "hide-state" : ""}`}>
      <h1>Title</h1>
      <p>tekst</p>
      <button onClick={handleToggle}>button</button>
    </section>
  );
}

export default ZeroState;
