import React , {useContext} from 'react'
import { CalcContext } from '../Context/CalcContext';
const Total = () => {
    const {TotalAmount} = useContext(CalcContext)
    return(
        <div className='total d-flex justify-content-center'>
            <h4>Total Spending : {TotalAmount}$</h4>
        </div>
    )
}
export default Total;