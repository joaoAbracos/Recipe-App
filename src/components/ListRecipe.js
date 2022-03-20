import React from 'react'
import ListItem from './list/ListItem';
import ListStep from './list/ListStep';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { ListGroup, Row } from 'react-bootstrap';
import { useAlert } from 'react-alert'
import { saveRecipe } from '../redux/features/recipes.feature';
import { resetRecipe } from '../redux/features/createRecipe.feature';
import uuid from 'react-uuid';

function ListRecipe() {
    const recipe = useSelector((state) => state.createrecipe);
    const dispatch = useDispatch();
    const alert = useAlert();
    console.log(recipe);
    const handleSaveRecipe = (event) => {
        event.preventDefault();
        if (recipe.recipeitems.length && recipe.recipeitems.length && recipe.title !== '') {
            dispatch(
                saveRecipe({
                    recipe: { ...recipe, id: uuid() },

                })
            )
            dispatch(resetRecipe())
            alert.show('New recipe Add', { type: 'success' });
        } else {
            alert.show('Create your Recipe', { type: 'error' });
        }

    };
   const ClearRecipe =()=>{
    dispatch(
        resetRecipe()
    )
   }
    return (
        <div className='m-4 p-3 rounded-2 shadow bg-white'>
            {recipe.title !== ''  || recipe.recipeitems.length || recipe.recipesteps.length 
            
            
            ? <>
                <h1 className='text-center'>{recipe.title}</h1>
                <ListGroup>
                    <h3>Ingredients</h3>
                    {Array.isArray(recipe.recipeitems) ? recipe.recipeitems.map((val) => (
                        <ListItem key={val.id} data={val} btn={true} />
                    )) : ""}
                </ListGroup>
                <ListGroup className='mt-4'>
                    <h3>Steps</h3>
                    {Array.isArray(recipe.recipesteps) ? recipe.recipesteps.map((val) => (
                        <ListStep key={val.id} data={val} btn={true} />
                    )) : ""}
                </ListGroup>
                {recipe.recipeitems.length && recipe.recipeitems.length ?
                    <div className='text-center mt-3'>
                        <span>
                            <button onClick={handleSaveRecipe} className='btn btn-primary'>Save Recipe</button>
                        </span>
                    </div> : ""
                }
                 <div className='text-center mt-3'>
                        <span>
                            <button onClick={ClearRecipe} className='btn btn-danger'>Clear Recipe</button>
                        </span>
                    </div>
            </> :<> <h1 className='text-center' style={{ fontStyle: "italic" }}> "BE CREATIVE"</h1> 
           </> }
        </div>
    )
}

export default ListRecipe