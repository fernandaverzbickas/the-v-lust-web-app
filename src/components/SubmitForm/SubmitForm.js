import React, { useState, useEffect} from 'react';

import './SubmitForm.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import Spinner from '../UI/Spinner/Spinner'
import {updateObject, checkValidity} from '../../shared/utility'
import firebase from '../../../lib/init-firebase'
import { useRouter } from 'next/router'

const SubmitForm = props => {
  const [lookForm, setLookForm] = useState({
    storeName: {
      label: "STORE'S NAME",
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: ""
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
    },
    storeUrl: {
      label: "WEBSITE",
      elementType: 'input',
      elementConfig: {
        type: 'url',
        placeholder: ""
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
    },
    storeEmail: {
      label: "EMAIL",
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: ""
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false,
    },
    storeLook: {
      label: "CHOOSE LOOK",
      elementType: 'input',
      elementConfig: {
        type: 'file',
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false, 
    }
  })
  const [formIsValid, setFormIsValid] = useState(false)
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false) 

  const router = useRouter()

  const formElementsArray = []
  for (let key in lookForm){
      formElementsArray.push({
          id: key,
          config: lookForm[key],
      })
  }

  const  handleUpload = (imageFile) => {
    let file = imageFile
    if (file !== undefined) {
      setLoading(true)
      const storageRef = firebase.storage().ref(`images/${file.name}`)
      storageRef.put(file).then(function(snapshot) {
          setUrl('')
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      }).then(function() {
          storageRef.getDownloadURL().then(function(downloadURL) {
              setUrl(downloadURL)
              setLoading(false)
          })
      })  
      }
    file ? null : setUrl('')
  }

  const inputChangedHandler = (event, inputIdentifier) => {
    let updatedFormElement = updateObject(lookForm[inputIdentifier], {
    value: event.target.value ,
    valid: checkValidity(event.target.value, lookForm[inputIdentifier].elementConfig.type),
    touched: true,
    })

    if(lookForm[inputIdentifier].elementConfig.type === "file") {
      let file = event.target.files[0]
      handleUpload(file)
      updatedFormElement = updateObject(lookForm[inputIdentifier], {
        value: url,
        valid: checkValidity(event.target.value, lookForm[inputIdentifier].elementConfig.type),
        touched: true,
      })
  }
    const updatedLookForm = updateObject(lookForm, {
        [inputIdentifier] : updatedFormElement
    })
    setLookForm(updatedLookForm)    
  }

const enablingSubmit = () => {
  let formIsValid = true
  for (let inputIdentifier in lookForm) {
    let validation = lookForm[inputIdentifier].valid && url.length > 1 && formIsValid
    formIsValid = validation
  }
  setFormIsValid(formIsValid)
}

useEffect(() => {
  enablingSubmit()
}, [url.length && lookForm.storeName.valid && lookForm.storeUrl.valid && lookForm.storeEmail.valid]);

const writeData = () => {
  setSubmitting(true)
  let cutEmail = lookForm.storeEmail.value.search("@")
  let storeEmail = lookForm.storeEmail.value.slice(0, cutEmail)
  return new Promise( resolve => {
    resolve(firebase.database().ref('looks/' + storeEmail + Date.now()).set({
        name: lookForm.storeName.value,
        url:lookForm.storeUrl.value,
        email: lookForm.storeEmail.value, 
        imageUrl: url,
    }))
  })
}  

const returnToMain = async () => {
    await writeData()
    router.push("/")
  }


  let form = (
    <div id='myForm'>
      <p style={{fontSize:'16px' },{textAlign:'center'}}>IN THE FASHION BUSINESS? <br/> 
          SUBMIT A LOOK AND COMPETE!</p>
    {formElementsArray.map(formElement => (
        <Input 
            key={formElement.id}
            label={formElement.config.label}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            //value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            url={url}
            loading={loading}
            changed={(event) => inputChangedHandler(event, formElement.id, formElement.config.elementConfig.type)} />
    ))}
        {loading === true && lookForm.storeLook.valid === true ? <Spinner /> : null}
        {(lookForm.storeLook.url !== undefined) || (lookForm.storeLook.valid === true) ? <img src={url} width='280px'/> : null}
        {lookForm.storeLook.touched === true && lookForm.storeLook.valid === false ? <p style={{color: 'red'}}>PLEASE SELECT AN IMAGE FILE</p> : null}
        <br/>
        <Button disabled={!formIsValid} clicked={returnToMain}>SUBMIT</Button>
        {submitting ? <Spinner /> : null}
    </div>
  )    

  return (
    <div className="submitForm">
      {form}
    </div>
)
  
}

export default SubmitForm