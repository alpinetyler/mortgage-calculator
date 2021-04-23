import React, { useState } from "react";
import NumberFormat from "react-number-format";
import './App.css';

function App() {
  const [payment, setPayment] = useState({
    loanPayment: "",
    amount: "",
    rate: "",
    years: ""
  });


  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const handleChange = (event) => {
    const { name, value } = event.target

    setPayment(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  const handleSubmit = (event) => {

    parseFloat(payment.amount, payment.rate, payment.years)

    let monthlyInterest = (payment.rate / 100) / 12;
    let months = payment.years * 12;
    let mortgageAmount = payment.amount.replace(/\$|,/g, '')

    console.log("after submit:", payment.amount, payment.rate, payment.years)

    let monthlyPayment = (mortgageAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -months))

    if (monthlyPayment) {
      setPayment(prevValue => {
        return {
          ...prevValue,
          loanPayment: formatter.format(monthlyPayment),
        }

      })

    }

    if (!payment.amount) {
      setPayment({ loanPayment: "" })
    }

    event.preventDefault();
  }

  const clearContent = () => {
    setPayment({
      loanPayment: "",
      amount: "",
      rate: "",
      years: ""
    })
  }

  return (
    <div className="App">

      <h1>Mortgage Calculator</h1>
      <form onSubmit={handleSubmit}>
        <p><NumberFormat thousandSeparator={true} prefix={'$'} type="text" name="amount" onChange={handleChange} value={payment.amount || ""} placeholder="mortgage amount" /> </p>
        <p><NumberFormat suffix={"%"} name="rate" onChange={handleChange} value={payment.rate || ""} placeholder="interest rate" /> </p>
        <p><input type="text" name="years" onChange={handleChange} value={payment.years || ""} placeholder="years" /> </p>
        <button type="submit">{payment.loanPayment ? "Re-Calculate" : "Calculate"}</button>
        <p><button onClick={clearContent}>Start Over</button></p>
      </form>


      <h1>Monthly Payment: {payment.loanPayment}</h1>

    </div>

  );
}

export default App;
