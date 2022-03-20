import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addItem, addStep,addTitle } from '../redux/features/createRecipe.feature';
import NumericInput from 'react-numeric-input';
import { Form, Col, Row } from 'react-bootstrap'
import { useAlert } from 'react-alert'
import '../css/FormRecipe.css'

function FormRecipe() {
    const [item, setItem] = useState();
    const [step, setStep] = useState();
    const [qt, setQt] = useState(0);
    const [type, setType] = useState();
    const [title, setTitle] = useState();
    const dispatch = useDispatch();
    const alert = useAlert();
    const onSubmitItem = (event) => {
        event.preventDefault();
        if (item && qt !== 0 && type) {
            dispatch(
                addItem({
                    itemname: item,
                    qt: qt,
                    type: type,
                })
            )
            setItem('')
            setType('')
            setQt('')
        } else {
            alert.show('Error! Add details to item', { type: 'error' });
        }

    };
    const onSubmitStep = (event) => {
        event.preventDefault();
        if (step ) {
            dispatch(
                addStep({
                    description: step,
                })
            )
            setStep('');
        } else {
            alert.show('Error! Add Step', { type: 'error' });
        }

    };
    const onSubmitTitle = (event) => {
        event.preventDefault();
        if(title !== ''){
            dispatch(addTitle({
                title:title
            }))
            setTitle('');
        }else{
            alert.show('Error! Add Title', { type: 'error' });
        }
        
    };
    return (
        <div className='text-center mt-3 mb-3 p-3 rounded-2 shadow bg-white'>
            <h1>Recipe Form</h1>
            <form onSubmit={onSubmitTitle} className='text-center mt-4'>
                <Form.Group as={Row} className='text-center'>
                    <Col xs="7" >
                        <input
                            type='text'
                            className='form-control mb-2 mr-sm-2'
                            placeholder='Name'
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </Col>

                </Form.Group>
                <button type='submit' className='btn btn-primary m-2'>
                    Set Name
                </button>
            </form>
            <form onSubmit={onSubmitItem} className='text-center mt-4'>
                <Form.Group as={Row}>

                    <Col xs="7" >
                        <input
                            type='text'
                            className='form-control mb-2 mr-sm-2'
                            placeholder='Add ingredient'
                            value={item}
                            onChange={(event) => setItem(event.target.value)}

                        />
                    </Col>
                    <Col xs="5">
                        <NumericInput min={0} max={100} name="qt" value={qt} className="form-control" onChange={(evt) => { setQt(evt) }} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col xs="7">
                        <Form.Select value={type} onChange={(event) => setType(event.target.value)} aria-label="Default select example">
                            <option value="" >Select type</option>
                            <option value="uni">units</option>
                            <option value="gr">gr</option>
                            <option value="ml">ml</option>
                        </Form.Select>
                    </Col>
                    <Col xs="5">
                        <input
                            type='text'
                            className='form-control mb-2 mr-sm-2'
                            placeholder='Custom Type..'
                            value={type}
                            onChange={(event) => setType(event.target.value)}

                        />
                    </Col>
                </Form.Group>

                <button type='submit' className='btn btn-primary m-2'>
                    Add Ingredient
                </button>
            </form>
            <form onSubmit={onSubmitStep} className='text-center mt-3 mb-3'>
                <textarea 
                    type='text'
                    className='form-control mb-2 '
                    placeholder='Add Step'
                    value={step}
                    onChange={(event) => setStep(event.target.value)}
                />
                <button type='submit' className='btn btn-primary'>
                    Add Step
                </button>
            </form>
        </div>
    )
}

export default FormRecipe