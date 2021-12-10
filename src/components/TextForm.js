import React, { useState } from "react";

//hooks help you utilise classes without creating one
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success")
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("on Change");
    setText(event.target.value);
    
  };
  //copy
  const handleCopy = () => {
    console.log("i am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  //remove extra spaces
  const handleExtraSpaces=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState("Enter text here");
  //use setText("new text") to change the state
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange} 
            style={{backgroundColor: props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
  );
}
