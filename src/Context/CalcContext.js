import React , {createContext,useState,useEffect} from 'react'
import uuid from 'uuid/v1';
export const CalcContext = createContext();

const CalcContextProvider = (props) =>{
    const [items , setitem] = useState([]);
    const [charge , setCharge] = useState('')
    const [Amount , setAmount] = useState('')
    const [CHitem , setCHitem] = useState([]);
    const [TotalAmount , SetTotal] = useState('');
    
    const HandelCharge = (e) =>{
        setCharge(e.target.value);
    }
    const HandelAmount = (e) =>{
        setAmount(e.target.value)
    }
    const HandelSubmit = (e) =>{
        e.preventDefault();
        setitem([...items , {id:uuid() , Charge:charge , Amount:Amount , Edit:false}]);
        setCharge('');
        setAmount('');
    }
    const DeleteItem = (id)=>{
        const filtedData = items.filter(item=> item.id !== id);
        setitem(filtedData);
    }

    const EditItem = (id) =>{
        let item = items.find(item => item.id === id);
        item.Edit = true;
        setCHitem([...CHitem , item]);
    }
    const FEdit = (id) =>{
        let item = items.find(item => item.id === id);
        charge.length > 0 ? item.Charge = charge :  setCharge('')
        Amount.length > 0 ? item.Amount = Amount : setAmount('')
        item.Edit = false;
        setCharge('')
        setAmount('')
        setCHitem([]);
    }
    //Function to get Total Amounts 
    useEffect(()=>{
        var Total = 0;
        for(const value of items){
            Total += parseInt(value.Amount);
        }
        SetTotal(Total);
    },[ items , FEdit]);

    //LocalStorage Functions
    useEffect(()=>{
        const localData = localStorage.getItem('items');
        if(localData){
            setitem(JSON.parse(localData))
        }
    },[ ])
    useEffect(()=>{
        localStorage.setItem('items' , JSON.stringify(items));
    })
    return(
        <CalcContext.Provider  value={{items , HandelAmount,HandelCharge , HandelSubmit ,DeleteItem,EditItem,FEdit,TotalAmount , charge , Amount}}>
            {props.children}
        </CalcContext.Provider>
    )
}
export default CalcContextProvider;