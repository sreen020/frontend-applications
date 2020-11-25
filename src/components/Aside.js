import { Component } from 'react';
import SelectYear from './SelectYear'
import '../style/Aside.css'

function Aside({allYears, setSelectedYears}) {
  return(
    <aside>
      <h1>Aside</h1>
      <SelectYear allYears={allYears} setSelectedYears={setSelectedYears}/>
      <p className="totalAmount"></p>
      {/* <button onClick={setSelectedYears(allYears)}>reset</button> */}
    </aside>
  )
}

export default Aside;