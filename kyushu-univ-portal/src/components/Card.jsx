import React from "react";


const Card = (props) =>{
    // const classes = useStyles();


    if (props.currentPeriod === props.period){
        
        return (

            <div class="mx-auto flex w-80 flex-col justify-center bg-lime-200 rounded-2xl shadow-xl shadow-slate-300/60 m-2 hover:bg-lime-300">
            
            <a href={props.url} target="_blank" rel="noreferrer">
                {/* <img class="aspect-video w-80 rounded-t-2xl object-cover object-center" src={props.faceImg} /> */}
            
                
                    <div class="p-4">
                        
                        <small class="text-rose-500 text-xs font-bold">Starting!  </small>
                        <h1 class="text-xl font-bold text-slate-600 pb-2 text-center">{props.name}</h1>
                        <p class="text-slate-500 text-xs text-right"> {props.teacher}</p>
                        
                    </div>
                </a>
            </div>
            
        )

    }else{
        return (

            
            <div class="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 m-5 hover:bg-gray-100">
            
            <a href={props.url} target="_blank" rel="noreferrer">
                {/* <img class="aspect-video w-80 rounded-t-2xl object-cover object-center" src={props.faceImg} /> */}
            
                
                    <div class="p-4">
                        <small class="text-blue-400 text-xs">{props.detail}</small>
                        <small class="text-slate-500 text-xs">{props.period}限目 </small>
                        <h1 class="text-xl font-medium text-slate-600 pb-2 text-center">{props.name}</h1>
                        <p class="text-slate-500 text-xs text-right"> {props.teacher}</p>
                    </div>
                </a>
            </div>
            
        )
        }
}

export default Card;