/* eslint-disable react/prop-types */
export function ColorButton ({text, changeColor, btnClass, color}) {
    
    
    return <button className={btnClass + " m-sm-3 btn rounded-pill px-3"} style={{backgroundColor: color}} type="button" onClick={changeColor}>{text}</button>;
}