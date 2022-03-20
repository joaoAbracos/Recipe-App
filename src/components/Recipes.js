import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Col, ListGroup, Row, Table, } from 'react-bootstrap';
import ApiCall from './ApiCall'
import '../css/Recipes.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deleteRecipe } from '../redux/features/recipes.feature';
import ListItem from './list/ListItem';
import ListStep from './list/ListStep';

function Recipes() {
    const recipe = useSelector((state) => state.recipes);
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const [id, setId] = useState();
    const dispatch = useDispatch();
    function handlePublish(e) {
        e.preventDefault();
        ApiCall(recipe);
    }
    function gotoRecipe(e) {
        e.preventDefault();
        navigate('/createrecipe');
    }
    function handleDeleteRecipe(e) {
        e.preventDefault();
        const id = e.target.id;
        dispatch(
            deleteRecipe({
                id: id,
            })
        )
    }
    return (
        <div>
            <div className='p-3 rounded-2 shadow bg-white m-3'>
                <h1 className='text-center'>Your Recipes </h1>
                <Row className='m-3'>
                    <Col style={{ textAlign: "end" }}>
                        <button className='btn btn-danger m-2' onClick={gotoRecipe}>Create recipe </button>
                        <button className='btn btn-primary' onClick={handlePublish}>Publish recipes </button>
                    </Col>
                </Row>
                <Row className='m-3'>
                    <Table>
                        <thead className='text-center'>
                            <tr>
                                <th style={{textAlign:"left"}}>Title</th>
                                <th>Items</th>
                                <th>Steps</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipe.recipes ? recipe.recipes.map((rec) => {
                                return (
                                    <>
                                        <tr>
                                            <td>
                                                <h1>{rec.title}</h1>
                                            </td>
                                            <td className='text-center'>
                                                <span class="mt-3 dot">{rec.recipeitems.length}</span>
                                            </td>
                                            <td className='text-center'>
                                                <span class="mt-3 dot">{rec.recipesteps.length}</span>
                                            </td>
                                            <td className='text-center align-middle'>
                                                <button class="button-21" value={rec.id} onClick={(event) => { setModalShow(!modalShow); setId(event.target.value) }}>
                                                    {modalShow ? "Close" : "Open"}
                                                </button>

                                            </td>
                                            <td className='text-center align-middle' >
                                                <form id={rec.id} onSubmit={handleDeleteRecipe}>
                                                    <button style={{ backgroundColor: 'white', border: 'white' }} type='submit' >❌</button>
                                                </form>
                                            </td>
                                        </tr>
                                        {modalShow && rec.id === id ?
                                            <Row>
                                                <Col><ListGroup>
                                                    <h3>Ingredients</h3>
                                                    {rec.recipeitems.map((val) => (
                                                        <ListItem key={val.id} data={val} btn={false} />
                                                    ))}
                                                </ListGroup></Col>
                                                <Col> <ListGroup >
                                                    <h3>Steps</h3>
                                                    {rec.recipesteps.map((val) => (
                                                        <ListStep key={val.id} data={val} btn={false} />
                                                    ))}
                                                </ListGroup></Col>



                                            </Row> : ""}
                                    </>
                                )
                            })
                                : ""
                            }
                        </tbody>
                    </Table>
                </Row>

            </div>
        </div>
    )
}

export default Recipes