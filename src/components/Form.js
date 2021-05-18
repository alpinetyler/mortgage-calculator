import React from 'react';
import NumberFormat from 'react-number-format';



function Form(props){
    return(
        <form 
              onMouseOut={props.handleSubmit} 
              onMouseOver={props.handleSubmit} 
              onSubmit={props.handleSubmit}
              onFocus={props.handleSubmit} 
              autoComplete="off">
        
        <div>

        
        <div className="form-floating mb-2">
        <NumberFormat
                type="text"  
                className="form-control"
                id="floatingAmount"
                thousandSeparator={true} 
                prefix={'$'} 
                name="amount" 
                onChange={props.handleChange} 
                value={props.payment.amount || ""} 
                placeholder="Loan Amount" /> 
                
                <label htmlFor="floatingAmount">Loan Amount</label>
          </div>
         
          <div className="form-floating mb-2 ">
          <input
                type="text"
                className="form-control"
                id="floatingRate"
                name="rate" 
                onChange={props.handleChange} 
                value={props.payment.rate || ""} 
                placeholder="interest rate" /> 

                <label htmlFor="floatingRate">Interest rate</label>
            </div>
         
          <div className="form-floating mb-2">
         <input 
                type="text"
                className="form-control"
                id="floatingYears"
                name="years" 
                onChange={props.handleChange} 
                value={props.payment.years || ""} 
                placeholder="years" /> 
                
                <label htmlFor="floatingYears">Years</label>

          </div>
          </div>
  


    
          
        <div className="mb-2">
        <button className="btn btn-outline-primary" type="submit">{props.payment.loanPayment ? "Re-calculate" : "Calculate"}
        </button>
        </div>

        <div>
        <button className="btn btn-outline-primary" onClick={props.clearContent}>Start Over</button>
        </div>
          
      </form>
    )
}

export default Form;


