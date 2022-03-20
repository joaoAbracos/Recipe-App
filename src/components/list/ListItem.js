import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap'
import { BsFillXCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteItem } from '../../redux/features/createRecipe.feature';
function ListItem(props) {
    const dispatch = useDispatch();
    const id = props.data.id;
    const handledeleteItem = (event) => {
        event.preventDefault();
        dispatch(
            deleteItem({
                id: id,
            })
        )
    };
    return (

        <ListGroup.Item>
            <Badge className='p-2' bg="warning"> <h6>{props.data.qt}({props.data.type})</h6> </Badge>
            <span style={{paddingLeft:"10px"}}>{props.data.item}</span>

            {props.btn ? <span style={{float:"right"}} onClick={handledeleteItem}><BsFillXCircleFill size="20px" color="red"/></span> :""}

        </ListGroup.Item>


    )
}

export default ListItem