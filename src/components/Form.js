import React from 'react';
import NumberFormat from 'react-number-format';



function Form(props){
    return(
        <form onSubmit={props.handleSubmit}>
        <div className="form-floating mb-3">
          <p><input className="form-control" id="floatingInput" thousandSeparator={true} prefix={'$'} type="text" name="amount" onChange={props.handleChange} value={props.payment.amount || ""} placeholder="mortgage amount" /> </p>
          <label for="floatingInput">Mortgage Amount</label>
        </div>

        {/* <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
        </div> */}
       
        <p><input name="rate" onChange={props.handleChange} value={props.payment.rate || ""} placeholder="interest rate" /> </p>
        <p><input type="text" name="years" onChange={props.handleChange} value={props.payment.years || ""} placeholder="years" /> </p>
        <button type="submit">{props.payment.loanPayment ? "Re-Calculate" : "Calculate"}</button>
        <p><button onClick={props.clearContent}>Start Over</button></p>
      </form>
    )
}

export default Form;


