import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchServices, addService } from '../../actions/appActions.js';
import AddServicesAndPricing from '../AuthApplyComponents/AddServicesAndPricing.js';
import ServicesAdded from '../AuthApplyComponents/ServicesAdded.js';
import '../AuthApplyComponents/Register.css';

//component to Add services will route from Dash in case provider wants to add more services

function AddServices(props) {
    const [ state, setState ] = useState({
        nails_services: {
            openForm: false,
            openSNPList: false,
            amtSA: []
        },
        hair_services: {
            openSNPList: false,
            openForm: false,
            amtSA: []
        },
        massage_services: {
            openSNPList: false,
            openForm: false,
            amtSA: []
        }
    })

    function handleAdd (e) {
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: {
                ...state[e.target.name],
                openForm: true,
                openSNPList: false
            }
        })
        
    }

    async function closeSNP (service, type, e) {
        await props.fetchServices(service, type);
        
        setState({
            ...state,
            [e.target.name]: {
                ...state[e.target.name],
                openForm: false,
                openSNPList: true
            }
        })
        

    }

    return (
        <div className='aSCont'>
                <h1>Here you can add specifics on your nail, hair, and massage services offered:</h1>
                {state.nails_services.openSNPList &&  props.nailsServices.map(n => {
                   return <ServicesAdded type="nails service" service={n.service} price={n.price}/>
                })}
                <div className='nailsButton'>
                    <button name='nails_services' onClick={handleAdd}>Add New Nails Service</button>
                </div>
                
                {state.nails_services.openForm && <AddServicesAndPricing close={closeSNP} stVal='nails_services' service='nails'/>}
                
                {state.hair_services.openSNPList && props.hairServices.map(h => {
                   return <ServicesAdded type='hair service' service={h.service} price={h.price}/>
                })}
                <div className='hairButton'>
                    <button name='hair_services' onClick={handleAdd}>Add New Hair Service</button>
                </div>
                {state.hair_services.openForm && <AddServicesAndPricing close={closeSNP} stVal='hair_services' service='hair'/>}
            
                {state.massage_services.openSNPList && props.massageServices.map(m => {
                   return <ServicesAdded type='massage service' service={m.service} price={m.price}/>
                })}
                <div className='massageButton'>
                    <button name='massage_services' onClick={handleAdd}>Add New Massage Service</button>
                </div>
                {state.massage_services.openForm && <AddServicesAndPricing close={closeSNP} stVal='massage_services' service='massage'/>}
        </div>
    )

}

const mapStateToProps = state => {
    return {
        nailsServices: state.servicesAndPricingReducer.nailsServices,
        hairServices: state.servicesAndPricingReducer.hairServices,
        massageServices: state.servicesAndPricingReducer.massageServices
    }
}

export default connect(mapStateToProps, { addService, fetchServices })(AddServices);