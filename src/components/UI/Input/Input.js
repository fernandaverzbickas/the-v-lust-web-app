import React from 'react'

import './Input.css'
import Spinner from '../Spinner/Spinner'

const input = (props) => {

    const inputClasses = ["InputElement"]
    const labelClasses = [ "Label"]

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push("Invalid")
    }

    if(props.elementConfig.type === "file") {
        inputClasses.push("InputFile")
        labelClasses.push("InputFileLabel")
    }

    let inputElement = <input
        id={props.label}
        className={inputClasses.join(' ')} 
        {...props.elementConfig}
        value={props.value} 
        onChange={props.changed}/>

    let labelElement = <label 
        className={labelClasses.join(' ')} 
        forhtml={props.label}
        onChange={props.changed}>
        {props.label}
        </label>

    if(props.elementConfig.type === "file") {
        return (
            <div className="Input" accept="image/*">
                {inputElement}
                <br/>
            </div>
        )
    }
    
    return (
    <div className="Input">
        {labelElement}
        {inputElement}
    </div>

)}

export default input