import React  from "react";
import {Card}  from "./index";

const AnswersList = (props) =>{
    return (

        <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r">    
        {/* card */}
            {props.answers.map( (value, index) =>{
                return <Card />
            })}

        </div>

        
     
    )
}

export default CardList