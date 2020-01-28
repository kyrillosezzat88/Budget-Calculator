import React , {useContext} from 'react'
import { CalcContext } from '../Context/CalcContext';

const CalcForm = () => {
    const {HandelCharge , HandelAmount ,HandelSubmit , charge , Amount} = useContext(CalcContext);
    return(
        <form onSubmit={HandelSubmit}>
            <div className='form-group d-inline-block'>
                <label htmlFor='Charge' className='d-block'>Charge:</label>
                <input value={charge} required id='Charge' type='text' placeholder='eg-Name' onChange={HandelCharge} />
            </div>
            <div className='form-group  d-inline-block '>
                <label htmlFor='Amount' className='d-block' >Amount:</label>
                <input value={Amount} required id='Amount' type='number'  placeholder='eg-100' onChange={HandelAmount} />
            </div>
            <div className='d-flex justify-content-center'>
                <input type='submit' value='Submit' className='d-block' />
            </div>
        </form>
    )
}
export default CalcForm;