import React, { useState } from 'react';

function Text() {
    let [text,setText]=useState('');
    let [textLength,setTextLength]=useState(0);
    const changeHandler =(e)=>{
        
        setText(text);
        textLength=e.target.value.length;
        console.log(setTextLength(textLength));
    }
    return (
        <div className="container">
            <div >
                <h1 className=' text-center'>Text-Utils</h1>
                <textarea name="text" max-cols="130" max-rows="13" value={text} onChange={changeHandler} ></textarea>
            </div>
            {/* <button type="button" class="btn btn-primary">Primary</button> */}
            <button className="btn btn-small btn-primary ">upper case</button>
        </div>);
}
export default Text;