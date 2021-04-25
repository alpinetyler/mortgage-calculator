import React from "react";

function MonthlyPayment(props) {
  return (
    <div>
     <h1>Monthly Payment: {props.loanPayment}</h1>
    </div>
  );
}

export default MonthlyPayment;