import React, {useState} from "react";


export default function TextForm(props) {

  const handleUpClick =()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.setAlert("Converted to Uppercase")

  }
  const handleDownClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.setAlert("Converted to LowerCase")
  }
  const clearTextBtn =()=>{
    let newText = (" ");
    setText(newText);
  }

  const copyTextBtn = () =>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const removeExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const HandleOnChange =(event)=>{
    setText(event.target.value)
  }

  const [text, setText] = useState("");

    return (
  <> 
    <div className="container">
      <h1 style={{color:props.mode==="dark"?'white':"#042743"}}>Enter the text to analyze below</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" onChange={HandleOnChange} value={text} ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to Lower Case</button>
      <button className="btn btn-primary" onClick={clearTextBtn}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={copyTextBtn}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove extra space</button>
      
    </div>
    <div className="container my-4" style={{color:props.mode==="dark"?'white':"#042743"}}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <h4>Time to read words per minute = 400 words/min</h4>
      <p>{text.split(" ").length*0.0025} Minutes to read this paragraph</p>
      <h4>Preview</h4>
      <p>{text.length>0?text:"Enter the text to preview it"}</p>
    </div> 
  </> 
  );
}
