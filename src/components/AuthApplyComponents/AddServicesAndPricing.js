import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editProfile } from '../../actions/appActions.js';
import * as yup from 'yup';

const serviceNPriceSchema = yup.object().shape({
    service: yup.string().required('Service is required'),
    price: yup.string().matches(/^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/,"Please enter a vaild dollar amount with cents and a leading dollar sign").required("Price is required")
})

function AddServicesAndPricing (props) {
    const [ service, setService ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ validationError, setValidationError ] = useState({inner: []})


   async function handleSubmit (e) {
        e.preventDefault()
        let vBody = {
            service: service,
            price: price,
            validationError: validationError
        }
        let body = {
            service: service,
            price: price,
        }
        serviceNPriceSchema.validate(vBody, {abortEarly: false})
    .then(async d => {
        if (d) {
        const id = localStorage.getItem('uID')
        await props.editProfile(1, body);
        setService('');
        setPrice('');
        window.confirm('Thank you for adding this service and pricing, it will now be available on your profile!');
    }
})
    .catch(err => {
        setValidationError(err);
    })   
    
      
}
    


    return (
        <div className='sPWrap'>
            <form type='submit' onSubmit={handleSubmit}>
                <label>Add the specific {`${props.service}`} service type here: </label>
                <input 
                type='text'
                onChange={(e) => setService(e.target.value)}
                value={service}
                name='service'
                placeholder='enter service'
                />
                <br></br>
                {validationError.inner != undefined && validationError.inner.filter(i => i.message === "Service is required").length > 0 ?  <div className="ErrorB">SERVICE IS REQUIRED RE-ENTER AND CLICK SUBMIT</div> : null}

                <label>Add the {`${props.service}`} service's pricing here (must be of the form $100.00 ie dollar sign, dollar value, period, cents): </label>
                <input 
                type='text'
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                name='price'
                placeholder='enter price'
                />
                <button onSubmit={handleSubmit}>Add service and price</button>
                {validationError.inner != undefined && validationError.inner.filter(i => i.message === "Price is required").length > 0 ?  <div className="ErrorB">PRICE IS REQUIRED RE-ENTER AND CLICK SUBMIT</div> : null}
                {validationError.inner != undefined && validationError.inner.filter(i => i.message === "Please enter a vaild dollar amount with cents and a leading dollar sign").length > 0 ?  <div className="ErrorB">"PLEASE ENTER A VALID DOLLAR AMOUNT WITH CENTS AND A LEADING DOLLAR SIGN"</div> : null}
            </form>  
            <button name={props.stVal} onClick={props.close}></button>      
        </div>
    )
}

export default connect(null, editProfile)(AddServicesAndPricing);