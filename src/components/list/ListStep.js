import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { BsFillXCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteStep } from '../../redux/features/createRecipe.feature';

function ListStep(props) {
    const dispatch = useDispatch();
    const id = props.data.id;
    const handledeleteItem = (event) => {
        event.preventDefault();
        dispatch(
            deleteStep({
                id: id,
            })
        )
    };
    return (
        <ListGroup.Item className='text-center'>
            <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>Step {props.data.order}</h5>
                {props.btn ? <small onClick={handledeleteItem} ><BsFillXCircleFill size="20px" color="red" /></small>:""}
            </div>
            <p className='mb-1' style={{textAlign:'left'}}>
                {props.data.description}
            </p>


        </ListGroup.Item>
    )
}

export default ListStep