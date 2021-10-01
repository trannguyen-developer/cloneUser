import React, {Fragment, useState, useRef} from 'react';
import './styles.css'
import Header from '../../component/Header'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'


const Create = props => {

    const history = useHistory();
    
    const dispatch = useDispatch()

    const [nameIsValid, setNameIsValid] = useState(true)
    const [ageIsValid, setAgeIsValid] = useState(true)
    const [addressIsValid, setAddressIsValid] = useState(true)

    const [inputNameValue, setInputNameValue] = useState('')
    const [inputAgeValue, setInputAgeValue] = useState('')
    const [inputAddressValue, setInputAddressValue] = useState('')

    const form = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    // handle click btn submit
    const handleClickBtn = () => {
        setNameIsValid(inputNameValue.trim().length > 0)
        setAgeIsValid(inputAgeValue.trim().length > 0)
        setAddressIsValid(inputAddressValue.trim().length > 0)
        if(inputNameValue.trim().length <= 0 || inputAgeValue.trim().length <= 0 || inputAddressValue.trim().length <= 0) {
            return;
        }
        dispatch({
            type: 'CREATE_USER',
            payload: {
                name: inputNameValue,
                age: inputAgeValue,
                address: inputAddressValue,
            }
        })
        history.push(`/`);
    }

    const handleNameValue = (e) => {
        setInputNameValue(e.target.value)
    }

    const handleAgeValue = (e) => {
        setInputAgeValue(e.target.value)
    }

    const handleAddressValue = (e) => {
        setInputAddressValue(e.target.value)
    }
    
    return (
        <Fragment>
            <Header />
            <div className="create-user">
                <h1>Create User Account</h1>
                <form ref={form} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input id="name" onChange={handleNameValue} value={inputNameValue} type="text" placeholder="Enter your name" />
                        {!nameIsValid && <p className="isValid">Please enter this field</p>}
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label>
                        <input id="age" onChange={handleAgeValue} value={inputAgeValue} type="text" placeholder="Enter your age" />
                        {!ageIsValid && <p className="isValid">Please enter this field</p>}
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <input id="address" onChange={handleAddressValue} value={inputAddressValue} type="text" placeholder="Enter your address" />
                        {!addressIsValid && <p className="isValid">Please enter this field</p>}
                    </div>
                    <button onClick={handleClickBtn} type="submit">
                        Create
                    </button>
                </form>
            </div>
        </Fragment>
    )
}

export default Create