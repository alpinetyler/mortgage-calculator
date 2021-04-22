import React, { useState } from "react";
import './App.css';

function App() {
  const [payment, setPayment] = useState({
    loanPayment: "",
    amount: "",
    rate: "",
    years: ""
  });


  const handleChange = (event) => {
    const { name, value } = event.target
    setPayment({ 
      [name]: value 
    });


  }









  return (
    <div className="App">

      <h1>Mortgage Calculator</h1>
      <p><input type="text" name="amount" value={payment.amount} onChange={handleChange} placeholder="mortgage amount" /> </p>
      <p><input type="text" name="rate" onChange={handleChange} value={payment.rate} placeholder="interest rate" /> </p>
      <p><input type="text" name="years" onChange={handleChange} value={payment.years} placeholder="years" /> </p>
      <button>Calculate</button>

    </div>

  );
}

export default App;
