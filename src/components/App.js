import React, { useState } from "react";
import Form from './Form';
import Header from './Header';
import Footer from './Footer'
import MonthlyPayment from './MonthlyPayment'
import '../App.css';

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
        [name]: value,
      };
    });

  console.log(payment.amount, payment.rate, payment.years)

    
  }

  const handleSubmit = (event) => {

    parseFloat(payment.amount, payment.rate, payment.years)
    
    let mortgageAmount
    let monthlyInterest = (payment.rate / 100) / 12;
    let months = payment.years * 12;
    if(payment.amount){
      mortgageAmount = payment.amount.replace(/\$|,/g, '')
    }
    

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
      <Header />
      
      <Form 
        handleSubmit = {handleSubmit}
        handleChange = {handleChange}
        clearContent = {clearContent}
        payment = {payment}
      />

      <MonthlyPayment 
      //  monthlyPayment = {MonthlyPayment}
       loanPayment = {payment.loanPayment}
      />
    <Footer />
    </div>

  );
}

export default App;
