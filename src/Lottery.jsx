
import { genTicket,sum } from './Helper'
import './Lottery.css'

import { useState } from 'react'
import  Ticket from './Ticket'

export default  function  Lottery({n,winningSum}){

    const [ticket,setticket]=useState(genTicket(n))

    let isWinning= sum(ticket)===winningSum;

    let buyNewTicket=()=>{
        setticket(genTicket(n))
    }

    return(
       
        <div  >
            <p> The sum of ticket number is equal=20, then you will win! else buy new ticket again!</p>
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