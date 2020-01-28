import React , {Component} from 'react';
import './Styles/App.css'
import CalcForm from './Components/BudgetForm';
import CalcContextProvider from './Context/CalcContext';
import BudgetList from './Components/BudgetList';
import Total from './Components/TotalBudget';

class App extends Component{
  render() {
    return (
      <div className="App d-flex justify-content-center align-items-center flex-column">
        <h1 className='text-center'>Budget Calculator</h1>
        <div className='innerApp'>
        <CalcContextProvider>
          <CalcForm/>
          <BudgetList/>
          <Total/>
        </CalcContextProvider>
        </div>
      </div>
    );
  }
}

export default App;
