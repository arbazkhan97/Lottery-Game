
import './App.css'
import Lottery from './Lottery'
import { sum } from './Helper'


function App() {

  function winCondition(ticket){

   return ticket[1]===0;
  }
  
  return (
    <>
    <Lottery n={3} winCondition={winCondition} />
    
   
    
    
     
    </>
  )
}

export default App
