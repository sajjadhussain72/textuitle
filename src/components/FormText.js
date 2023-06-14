
import React, {useState}  from 'react'
// import { useState } from 'react';

export default function FormText(props) {
    const uppercaseclick = ()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("converted in to Uppercase","success")
    }
    const lowercaseclick = ()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("converted in to Lowercase" , "success")
     
    }
    const clerclick = ()=>{
        let newText= '';
        setText(newText);
        props.showAlert("Text cler" , "danger")
     
    }
  
    const handleonchange = (event) => {
        setText(event.target.value)

    }
    const [text, setText] = useState("");
    // text =" sjfkdcnmxvuee  wrong way to change the state
    // setText("jhdkjslhdj"); correct  way to change the state
  return (
    <>
    

    <div className='container' style={{color:props.mode ==='dark'?'white':'black'}} id='firstcontainer'>
         <h2>{props.heading } </h2>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor:props.mode ==='dark'?'#13466e':'white',color:props.mode ==='dark'?'white':'black'}}   value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
       </div>
      
       <button className="btn btn-primary my-1" onClick={uppercaseclick}>convert to uppercase</button>
       <button className="btn btn-primary mx-3 my-1" onClick={lowercaseclick}>convert to lowercase</button>
       <button className="btn btn-primary mx-3 my-1" onClick={clerclick}>Text cler</button>
    </div>
    {/* new container */}
    <div className="container my-4" id='secoundcontainer'>
           <h2 style={{color:props.mode ==='dark'?'white':'black'}}>Your text summary </h2>
           <p>  {text.split (" ").filter((element)=>{return element.length > 0}).length } words {text.length} characters</p> 
           <p className='text-success' > {0.008 *text.split (" ").length } minutes to read</p>
           <h3 className='text-info'>preview</h3>
           <p >{text.length>0?text:'Enter somthing inthe textbox about to preview it here ' } </p>
    </div>
    </>
  )
}
