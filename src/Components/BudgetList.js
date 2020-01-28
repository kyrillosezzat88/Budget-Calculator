import React, {useContext} from 'react'
import { CalcContext } from '../Context/CalcContext';
const BudgetList = () =>{
    const {items , DeleteItem , EditItem,HandelCharge,HandelAmount,FEdit } = useContext(CalcContext);
    return(
        items.length ? (
            items.map(item => {
                return(
                    item.Edit === false ? (
                        <div key={item.id} className='budgetlist d-flex justify-content-between'>
                            <span>{item.Charge}</span>
                            <span>{item.Amount}$</span>
                            <div><i onClick={()=>EditItem(item.id)} className="fas fa-pen"></i><i className="text-danger fas fa-trash" onClick={()=>DeleteItem(item.id)}></i></div>
                        </div>
                    ) : (
                        <div key={item.id} className='budgetlist d-flex justify-content-between'>
                            <input defaultValue={item.Charge} onChange={HandelCharge} />
                            <input  defaultValue={item.Amount} onChange={HandelAmount} />
                            <div><i onClick={()=>FEdit(item.id)} className="fas fa-check"></i></div>
                        </div>
                    )
                    
                )
            })
        ) : (
            <h2 className='noitem text-danger text-Capitalize text-center'>There is No items Yet!!</h2>
        )
    )
   
}
export default BudgetList;