import React, {useState} from 'react';

function ColorPicker(){
const [color, setColor] = useState("#FFFFFF");

 function handleColorChange(event){
    setColor(event.target.value);
 }
 return(
    <> 
     <div className="Color-Picker">
        <h2>Color Picker</h2>
        <div className="Color-Div" value={color} style={{backgroundColor : color}}>
        </div>
        <p className='Position'>Selected Color : {color}</p>
         <pre>Select Color👇</pre>
        <input className='color' type="color" onChange={handleColorChange}></input>
     </div>
     <footer>
        <div className="footer">
         <p>© Sumit Production pvt.Ltd</p>
        </div>
     </footer>
     
     </>
 );
}
export default ColorPicker