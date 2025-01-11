
import { genTicket,sum } from './Helper'
import './Lottery.css'

import { useState } from 'react'
import  Ticket from './Ticket'

export default  function  Lottery({n,winCondition}){

    const [ticket,setticket]=useState(genTicket(n))

    let isWinning= winCondition(ticket);

    let buyNewTicket=()=>{
        setticket(genTicket(n))
    }

    return(
       
        <div  >
            <p> The middle  number of ticket  is  equal=0, Then you will win! else buy new ticket again!</p>
            <h1>Lottery Game!</h1>
                <div>
                <Ticket ticket={ticket} />
                </div>-
            
                
                
           
          <br />
            <button onClick={buyNewTicket} >Buy New Ticket</button>
            <h3>{ isWinning ? "congratulation, you won!" :" Buy again ticket " }</h3>
            
        </div>
        
    )
}